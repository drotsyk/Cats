import React from 'react'

export const CatInfo = ({ catInfo, toggleClick,}) => {
  
  return (
    <div className="catInfo" onClick={() => toggleClick()}>
      <ul>
        {catInfo.map((cat, index) =>(
          <li key={index}>
            <img src={cat.image_url} alt=""/>
            <h1>Name: {cat.name}</h1>
            <h2>Age: {cat.id}</h2>
            <h3>{cat.total}</h3>
            <button onClick={() => toggleClick()}>Close</button>
          </li>
        ) 
        )}
      </ul>
    </div>
  )
}