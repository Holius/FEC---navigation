import React, {Component} from 'react';
import HoverModal from './HoverModal';
import NavBar from './NavBar';


class Bar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: null,
            generate: 
            [
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
                {
                    header: 'Different -->',
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
                {
                    header: 'Also differnt -->',
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
                {
                    header: 'Still different -->',
                    categories: [
                        {title: 'Accessories', box2: '1a', box3: '1b'},
                        {title: 'Bags & Purses', box2: '2a', box3: '2b'},
                        {title: 'Necklaces', box2: '3a', box3: '3b'},
                        {title: 'Rings', box2: '4a', box3: '4b'},
                        {title: 'Earrings', box2: '5a', box3: '5b'},
                        {title: 'Bracelets', box2: '6a', box3: '6b'},
                        {title: 'Body Jewelry', box2: '7a', box3: '7b'}
                    ]
                }
            ],
          }
        }


    onSelect (i) {
        this.setState({currentTab: this.state.generate[i]})
    }

    render () {
        if (this.state.currentTab === null) {
            return (
                <div>
                <NavBar
                    onSelect={this.onSelect.bind(this)}
                />      
            </div> 
            )
        } else {
        return (
                <div>
                    <NavBar
                        onSelect={this.onSelect.bind(this)}
                    />
                    {
                    <HoverModal
                        data={this.state.currentTab}
                    />
                    }       
                </div> 
                )       
        }
    }
}

export default Bar;