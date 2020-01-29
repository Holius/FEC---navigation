import React from 'react'

function Box4 (props) {
    return (
        
<div className={'box4'}>
<figure className={'modalFigure'}>
    <img 
        src={props.data}
        className={'modalImage'}
    />
    <figcaption>Professor's Picks <br/> 
        <span className={'profPick'}>{props.caption}</span>
    </figcaption>
</figure>  
</div>
    )
}

export default Box4;