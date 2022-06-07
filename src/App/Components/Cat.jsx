import React from 'react'
import { CatInfo } from './CatInfo'

let bg_color = [
  "#D3E8FF", "#FDE9E4", "#CDF5D4", "#EFE1DA", "#ECF4E0", "#FAEEFA", "#EEE9E8", "#D9F5CB", "#DFDFFA", "#FAF4CF"
]

export class Cat extends React.Component {
  state = {
    click: false,
    selectedItem: null,
    boughtItem: [],
  }
  
  toggleClick = () => {
    this.setState({
      click: !this.state.click
    })
  }
  
  info = (catId,) => {
    const visible = this.props.cats.filter( cat => 
      catId === cat.id)
    this.setState({
      selectedItem: visible
    }) 
  }
 
  buyItem = (catId) => {
    const visible = this.props.cats.filter(
      cat => catId === cat.id
    )
    if(!this.state.boughtItem.includes(catId)){
      this.setState(state => ({
        boughtItem: [...state.boughtItem, catId]
      }))
    }else{
      alert('Already bought')
    }
    this.pushLocal(catId,visible)
  }

  pushLocal = (catId,visible) => {
    localStorage.setItem(catId, JSON.stringify(visible[0]))
  }

  handleClick = (catId) => {
    this.info(catId)
    this.toggleClick()
  }

  getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomColor = () => {
    return bg_color[this.getRandomInt(0, bg_color.length - 1)]
  }

  render() {
    const { click, selectedItem, } = this.state
    const { cats } = this.props
 
    return(
      <>
      <ul className="catsList">
        {cats.map((cat, index )=> (
          <li key={index} 
          className='catsItem' 
          style={{
            backgroundColor: this.randomColor()
          }} >
            <div 
              className="cat-card"
              onClick={() => 
                this.handleClick(cat.id)
              }
            >
            <img src={cat.image_url} alt=""/>
            {cat.name === null ? (
              <div><b>Name:</b> Tramp</div>
            ):(
              <div><b>Name:</b> {cat.name}</div>
            )}
            <div><b>Age:</b> {cat.id}</div>
            <div><b>Price:</b> {(cat.auction.current_price / 1000000000000000000).toFixed(3).replace(/\.?0+$/, '')} $</div>
            </div>
            <button className="btn-buy"
              onClick={() => 
                this.buyItem(cat.id)
              }>
              Buy
            </button>
          </li>
        ))}
        {click && (
          <CatInfo 
            catInfo={selectedItem}
            toggleClick={this.toggleClick}
          />
        )}
      </ul>
    </>
    )
  }
}

