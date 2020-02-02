import React from 'react'

function Box2 (props) {

    const {data} = props;
    var box2 = [];
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].main === true) {
            box2.push(
                <li 
                    className={'main'}
                    key={i}
                >
                    {data[i].title}
                </li>
            )
        } else {
            box2.push(
                <li 
                    className={'sub'}
                    key={i}    
                >
                    {data[i].title}
                </li>
            )
        }
    }

    return (
        <div className={'box2'}>
            <ul>
                {box2}
            </ul>  
        </div>
    )
}

export default Box2;