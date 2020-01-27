import React, {Component} from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';


class HoverModal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {

    return (
        <div className={'extendBox'}> 
            <Box1/> 
            <Box2/>
            <Box3/>
            <Box4/>
        </div>
        )
    }
}

export default HoverModal;





