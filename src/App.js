import React, { PropTypes } from 'react'
import Forms from "./Forms"
import Tudo from './Tudo'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      fontSize:26,
      show:true
    }
  }
  handleClick(e){
    this.setState({

      fontSize:this.state.fontSize + e.deltaY/100
    })
  }
handleContext(e){
  this.setState({
    show:!this.state.show
  })
}
handleJump(){
  e.preventDefault()
}
  render () {
    let styles={
      fontSize:`${this.state.fontSize}px`
    }
   return(
     <div onWheel = {this.handleClick.bind(this)} style={styles} onContextMenu={this.handleContext.bind(this)}>
       a
      { this.state.show ? 'haha' : null}
      <a href="http://music.163.com/" onClick={this.handleJump.bind(this)}>click</a>
      <Forms/>
      <Tudo/>
     </div>
   )
  }
}

export default App;
