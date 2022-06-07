import React from 'react'

export class SortBar extends React.Component {
  state = {
    click:false,
  }

  toggleClick = () => {
    this.setState({
      click: !this.state.click
    })
    this.props.setCountSort()
  }

  render(){
    const { click, } = this.state
    const { selectedSort, sortValues } = this.props
    return(
      <>
        <div className="sortBar">
          <h1 className="sortBar__title">Sort by: </h1>
          <select value={selectedSort} onChange={(e) => {
            this.props.setSort(e.target.value)
          }}> 
            {sortValues.map((value)=>(
              <option value={value} key={value}>{value}</option>
            ))}
          </select>
          <div className="sortBar__btn" onClick={()=> this.toggleClick()}>
            {click ? (
              <>
                <h2 >low to hight</h2>
                <div className="gg-arrows-v"></div>
              </>
            ):(
              <>
                <h2 >hight to low</h2>
                <div className="gg-arrows-v"></div>
              </>
            )}
            
          </div>
        </div>
      </>
    )
  }
}