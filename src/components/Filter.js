import React from 'react'

function Filter({value, onchanger}) {
    return (
        <div>
            <input type="text" value={value} onChange={onchanger}/>
        </div>
    )
}

export default Filter
