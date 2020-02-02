import React from 'react';



function Box1 (props) {
    let {data, onRowHover} = props
    let array = [];
    for (let i = 0; i < data.categories.length; i++) {
        array.push(
        <tr 
            className={'rowNav'}
            onMouseEnter={onRowHover.bind(this, i)}
            key={i}
        >
            <td>
                {data.categories[i].title}
            </td>
            <td className={'chevron'}>
            <img src="greaterThan.png"/>
            </td>
        </tr>
        )
    }
    console.log(array)
    if (data.footer !== undefined) {
            return (
        <div className={'box1'}> 
           <div className={'headerRow'}>
               <h4>{data.header} 
                    <span>{'\u2b95'}</span>
                </h4>
            </div>
            <table className={'tableNav'}>
                <tbody> 
                    {array}
                </tbody>
            </table>
            <div className={'headerRow'}>
               <h4>{data.footer} 
                    <span>{'\u2b95'}</span>
                </h4>
            </div>
        </div>
    )
    } else {
        return (
            <div className={'box1'}> 
               <div className={'headerRow'}>
                   <h4>{data.header} 
                        <span>{'\u2b95'}</span>
                    </h4>
                </div>
                <table className={'tableNav'}>
                    <tbody> 
                        {array}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Box1


