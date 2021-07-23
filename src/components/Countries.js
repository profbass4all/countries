import React from 'react'

function Countries({orilede, setOrilede}) {
    if(orilede.length > 10){
        return (
            <p>Too many matches specify another filter</p>
        )
    }else if((orilede.length <= 10 && orilede.length> 1 ) || orilede.length === 1){
        return(
            <ul>
                {orilede.map((ilu, i) => <li key={ilu.name}>{ilu.name}</li>)}
            </ul>
        )
    }else{
        return(<p>I never Sabi this side</p>)
    }
}

export default Countries
