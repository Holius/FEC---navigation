import React from 'react';



function Box1 (props) {
    let {data, onRowHover} = props
    let array = [];
    for (let i = 0; i < data.categories.length; i++) {
        array.push(
        <tr 
            className={'rowNav'}
            onMouseEnter={onRowHover.bind(this, i)}
        >
            <td>
                {data.categories[i].title}
            </td>
            <td>
                >
            </td>
        </tr>
        )
    }
    console.log(array)
    return (
        <div className={'box1'}> 
            <table className={'tableNav'}>
                <tbody> 
                    {array}
                </tbody>
            </table>
        </div>
    )
}

export default Box1


