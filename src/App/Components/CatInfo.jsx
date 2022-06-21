import React from 'react'

export const CatInfo = ({ catInfo, toggleClick,}) => {
  return (
    <div className="catInfo" onClick={() => toggleClick()}>
      <ul>
        {catInfo.map((cat, index) =>(
          <li key={index}>
            <img src={cat.image_url} alt=""/>
            {cat.name === null ? (
              <h1>Name: Tramp</h1>
            ): (
              <h1>Name: {cat.name}</h1>
            )}
            <h2>Age: {cat.id}</h2>
            <h3>Price: {cat.auction.current_price}$</h3>
            <button onClick={() => toggleClick()}>Close</button>
          </li>
        ) 
        )}
      </ul>
    </div>
  )
}