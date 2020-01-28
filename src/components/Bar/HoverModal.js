import React, {Component} from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';


class HoverModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            generate: 
                {
                    header: 'All Jewelry & Accessories -->',
                    categories: [
                        {title: 'Accessories', box2: '1a', box3: '1b'},
                        {title: 'Bags & Purses', box2: '2a', box3: '2b'},
                        {title: 'Necklaces', box2: '3a', box3: '3b'},
                        {title: 'Rings', box2: '4a', box3: '4b'},
                        {title: 'Earrings', box2: '5a', box3: '5b'},
                        {title: 'Bracelets', box2: '6a', box3: '6b'},
                        {title: 'Body Jewelry', box2: '7a', box3: '7b'}
                    ]
                },
            selected: 0,
        }
    }

    onRowHover (i) {
        this.setState({selected: i})
    }

    render () {

    return (
        <div className={'extendBox'}> 
            <Box1
                data={this.state.generate}
                onRowHover={this.onRowHover.bind(this)}
            /> 
            <Box2 
                data={this.state.generate.categories[this.state.selected].box2}
            />
            <Box3
                data={this.state.generate.categories[this.state.selected].box3}
            />
            <Box4/>
        </div>
        )
    }
}

export default HoverModal;





