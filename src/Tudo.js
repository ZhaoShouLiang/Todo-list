import React, { PropTypes } from 'react'
import TudoList from './TudoList'
import TudoControl from './TudoControl'
import './main.css'
class Tudo extends React.Component {
  constructor(){
    super();
    this.state={
      items:[
        {title:'我没完成',completed:false,id:1},
        {title:'我完成了',completed:true,id:2}
      ],
      show:1
    }
  }
myFindIndex(id){
  var index = this.state.items.findIndex( (ele)=>id == ele.id);
  return index
}
handleDel(id){
  console.log(this)
  // var index = this.state.items.findIndex(function (ele,i){
  //     return xx == ele.id
  //   })
  let index=this.myFindIndex(id)
  this.state.items.splice(index,1);
  this.setState({
    item:this.state.items
  })
}
handleComplete(id){
  // var index = this.state.items.findIndex(function(ele,i){
  //   return id==ele.id
  // })
  let index = this.myFindIndex(id)
  this.state.items[index].completed = !this.state.items[index].completed;
  this.setState({items:this.state.items})
  }
handleSubmit(e){
  e.preventDefault();
  let inputValue = this.refs.input.value.trim();
  this.refs.input.value=null;
  let data = new Date();
  let newItem = {title:inputValue,completed:false,id:data.getTime()};
  this.state.items.push(newItem);
  this.setState({
    items:this.state.items
  })

}
handleShow(i){
  this.setState({
    show:i
  })
}
  render () {
  if (this.state.show==0) {
    var showItem = this.state.items
  }else if(this.state.show==1){
    var showItem = this.state.items.filter( function(element){
      return element.completed=false
    })
  }else if (this.state.show==2) {
    var showItem = this.state.items.filter( function(element){
        return element.completed=true
    })
  }
    return(
     <div className="main">
        <h3>TUDO LIST</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='add a todo' ref='input'/>
          <button type='submit'>ADD # {this.state.items.length+1}</button>
        </form>
        <TudoList items={showItem} handleComplete={this.handleComplete.bind(this)} handleDel={this.handleDel.bind(this)}/>
       <TudoControl handleShow={this.handleShow.bind(this)} show={this.state.show}/>
    </div>
   )
  }
}
export default Tudo;
