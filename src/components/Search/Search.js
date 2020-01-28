import React, {Component} from 'react';
import SearchModal from './SearchModal';

class Search extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.state = { 
            array: [
            'a','b','bb','c','d'
            ],
            query: '',
            show: false,
        }
        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    };

    onSearchChange () {
        this.setState({query: event.target.value.toLowerCase()})
      };

      toggleShow () {
        event.preventDefault();
        this.setState({show: !this.state.show})
      };


    handleClick(e) {
        if (this.state.show === false) {
          // attach/remove event handler
          console.log('set to true')
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
                  onChange={this.onSearchChange.bind(this)}
                  onClick={this.handleClick.bind(this)}
                />
            <button onClick={(e) => {
                this.toggleShow();
            }}>Q
            </button>
            <SearchModal
                show={this.state.show}
                query={this.state.query}
              />
          </div>
          );
      }

    }

export default Search;