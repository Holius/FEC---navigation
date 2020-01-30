import React, {Component} from 'react';
import SearchModal from './SearchModal';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.state = { 
            array: [],
            current: [],
            popular: [],
            query: '',
            show: false,
        }
        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    };

    componentDidMount () {
      axios.get('/api/searchItems')
      .then( results => {
         this.setState({ array: results.data})
      }).then ( results => {
        this.setState( {popular: this.getTopTenQueries(this.state.array)} )
      })
      .catch( error => {
          console.error(error);
      });
  }

    getTopTenQueries (array) {
      let top = array.sort( (a,b) => {
        if (a.views < b.views) {
          return -1;
        }
        if (a.views > b.views) {
          return 1;
        }
        return 0;
      })
      let result = [];
      for (let i = top.length - 10; i < top.length; i++) {
        result.push(top[i])
      }
      return result
    }

    onSearchChange () {
        Promise.resolve(this.setState({query: event.target.value.toLowerCase()}))
        .then( x => {
          if (this.state.query.length) {
            let temp = [];
            for (let i = 0; i < this.state.array.length; i++) {
              let title = this.state.array[i].title;
              if (title.toLowerCase().startsWith(this.state.query)) {
                temp.push(title);
              }
            }
            this.setState({ current: temp })
        }})
    
      };

      toggleShow () {
        event.preventDefault();
        this.setState({show: !this.state.show})
      };


    handleClick(e) {
        e.preventDefault();
        if (this.state.show === false) {
          document.addEventListener('click', this.handleOutsideClick, false);
          this.setState({show: true})
        }
         else if (this.state.show === true && this.myRef.current.contains(e.target) === false) {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
      }
      
      handleOutsideClick(e) {
        if (this.myRef.current.contains(e.target)) {
          return;
        }
        this.setState({show: false})
      }
      
      render() {
          return (
                <div 
                  ref={this.myRef}
                  className={'SearchBarFull'}
                  > 
                <input 
                  className={'searchBar'}
                  type='text' 
                  value={this.state.query}
                  placeholder='Search for items or shops'
                  onChange={this.onSearchChange.bind(this)}
                  onClick={this.handleClick.bind(this)}
                />
            <input 
              className={'searchButton'}
              type="image" 
              src="blackmg.jpg" 
              alt="Search"
            />
            <SearchModal
                show={this.state.show}
                query={this.state.query}
                current={this.state.current}
                popular={this.state.popular}
              />
          </div>
          );
      }

    }

export default Search;