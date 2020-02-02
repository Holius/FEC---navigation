import React, {Component} from 'react';

class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.state = { 
            array: [],
            current: [],
        }
    }

    render () {
        let {query, show, current, popular} = this.props;
        if (!show) {
            return null
        } 
        else if (!query.length) {
            return (
                <ul className='searchBox' >
                    <p>Popular Right Now</p> 
                    {popular.map(x => <li>{x.title}</li>)}
                </ul>
            )
        } else if (!current.length) {
            return (
                <ul className='searchBox'>
                    <li>find shop names containing '{query}'</li>
                </ul>
            )
        }
        else {
        return (
            <ul className='searchBox'>
                {current.map( x => <li>{x}</li>)}
            </ul>
        )
        }
    }
}

export default SearchModal;


  
   
  
//     render() {
//       return (
//         <div className="popover-container" ref={node => { this.node = node; }}>
//           <button
//             onClick={this.handleClick}
//           >
//             Toggle Popover
//           </button>
//           {this.state.popupVisible && (
//             <div
//               className="popover"
//             >
//               I'm a popover!
//             </div>
//            )}
//         </div>
//       );
//     }
//   }