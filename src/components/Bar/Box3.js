import React from 'react'

function Box3 (props) {
    const {data, footer} = props;
    var box3= [];
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].main === true) {
            box3.push(
                <li 
                    className={'main'}
                    key={i}
                >
                    {data[i].title}
                </li>
            )
        } else {
            box3.push(
                <li 
                    className={'sub'}
                    key={i}
                >
                    {data[i].title}
                </li>
            )
        }
    }
    box3.push(
        <div 
            className={'headerRow'}
            key={data.length}
        >
            <p className={'main'}>{footer} 
                <span>{'\u2b95'}</span>
            </p>
        </div>
    )
    return (
        
<div className={'box3'}>
<ul>
    {box3}
</ul>  
</div>
    )
}

export default Box3;