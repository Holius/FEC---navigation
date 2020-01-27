import React, {Component} from 'react';

class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.state = { 
            array: [
            'a','b','bb','c','d'
            ],
        }
    }

    render () {
        let {query, show} = this.props;
        if (!show) {
            return null
        } else if (!query.length) {
            return (
                <ul className='searchBox' >
                    <li>Type some Stuff</li> 
                </ul>
            )
        }
        else {
        let render = this.state.array.filter( x => x.startsWith(query))

        return (
            <ul className='searchBox'>
                {render.map( x => <li>{x}</li>)}
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