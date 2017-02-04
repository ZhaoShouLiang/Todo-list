import React, { PropTypes } from 'react'

class Forms extends React.Component {
  constructor(){
    super();
    this.state={
      value:666
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.input.value)
  }
  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }
  handleRadio(e){
    this.setState({
      value:e.target.value
    })
  }
  render () {
    return(
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
        Name:
        <input type="text" name="name" value={this.state.value} ref='input' onChange={this.handleChange.bind(this)}/>
        A<input type="radio" name="name" value='A'  onChange={this.handleRadio.bind(this)}/>
        B<input type="radio" name="name" value='B'  onChange={this.handleRadio.bind(this)}/>
        </label>
        <button type='submit'>提交</button>
      </form>
    </div>
  )
  }
}

export default Forms;
