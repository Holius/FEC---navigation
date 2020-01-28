import React from 'react';

function NavBar (props) {
    const {onSelect} = props;
    const tabHeading = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'HufflePuff']
    const display = [];
    for (let i = 0; i < tabHeading.length; i++) {
        const index = i;
        display.push(
            <li onMouseEnter={onSelect.bind(this, index)} key={i}>
                {tabHeading[i]}
            </li>
        )
    }
    return (
        <div >
            <ul className='NavBar'>
                {display}
            </ul>
        </div>
    )
}
    
export default NavBar;