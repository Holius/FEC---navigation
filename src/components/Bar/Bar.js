import React, {Component} from 'react';
import HoverModal from './HoverModal';
import NavBar from './NavBar';


class Bar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <NavBar/>
            <HoverModal/> 
        )
    }
}

export default Bar;