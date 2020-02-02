import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
    }

    render () {
        let {query, show, current, popular, onHoverSubmit} = this.props;
        if (!show) {
            return null
        } 
        else if (!query.length) {
            return (
                <ul className='searchBox' >
                    <p>Popular Right Now</p> 
                    {popular.map( (x,i) => 
                        <li 
                            onClick={onHoverSubmit.bind(null, event, x.listing_id, x.title)}
                            key={i}
                        >
                        <Link to={`/${x.listing_id}`}>
                            {x.title}
                        </Link>
                        </li>)}
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
                {current.map( x => <li onClick={onHoverSubmit.bind(null, event, x.listing_id, x.title)}>{x.title}</li>)}
            </ul>
        )
        }
    }
}

export default SearchModal;