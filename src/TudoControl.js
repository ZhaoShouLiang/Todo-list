import React, { PropTypes } from 'react'

class TudoControl extends React.Component {
  handleClick(i){
    this.props.handleShow(i)
  }
  render () {
    let name = ['All','Active','completed'];
    let buttons = name.map( (item,index)=>
    <button key={index} onClick={this.handleClick.bind(this,index)} style={this.props.show == index?{backgroundColor:'teal'} :null}>{item}
      </button>
    )
    return(
      <div>
        {buttons}
      </div>
    )
  }
}

export default TudoControl;
