import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from "../components/CopyCat";
const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);
    
    this.state = { 
      input: '',
      name: 'Talking Tom',
      copying: true
    };
    this.handleChange  = this.handleChange.bind(this);
    this.toggleTape = this.toggleTape.bind(this);
  }
    handleChange(e) {
    this.setState({input: e.target.value})
 }
  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    return <CopyCat copying={this.state.copying} toggleTape={this.toggleTape} input={this.state.input} handleChange={this.handleChange} name={this.state.name}/>;
    
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));