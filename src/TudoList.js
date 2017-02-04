import React, { PropTypes } from 'react'

class TudoList extends React.Component {
  handleChange(id){
    this.props.handleComplete(id);
    this.props.items.splice(index,0)
  }
  handleDel(id){
    this.props.handleDel(id)
  }
  render(){
    let par=this.refs.aaa
    let list = this.props.items.map( (item)=>
      <div key={Math.random()} className='item'>
        <input type='radio' checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>
        <span  className='title' style={item.completed ? {textDecoration: 'line-through',opacity:'0.6'} : null}>{item.title}</span>
        <button onClick={this.handleDel.bind(this,item.id)}>删除</button>
      </div>
    )
    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default TudoList;
