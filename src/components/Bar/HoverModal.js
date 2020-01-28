import React, {Component} from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';


class HoverModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
    }
}

    onRowHover (i) {
        this.setState({selected: i})
    }

    render () {
        let {data} = this.props;
    return (
        <div className={'extendBox'}> 
            <Box1
                data={data}
                onRowHover={this.onRowHover.bind(this)}
            /> 
            <Box2 
                data={data.categories[this.state.selected].box2}
            />
            <Box3
                data={data.categories[this.state.selected].box3}
            />
            <Box4/>
        </div>
        )
    }
}

export default HoverModal;





