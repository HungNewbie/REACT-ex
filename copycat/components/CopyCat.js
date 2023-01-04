import React from 'react';
import { styles } from '../styles.js';
import PropTypes from 'prop-types';
const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const handleChange = this.props.handleChange;
    const input = this.props.input;
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {this.props.name ? this.props.name : "Tom"}</h1>
     <input type="text" onChange={handleChange} value={input} />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
      <p>{copying ? input : null}</p>
      </div>
    );
  };
}
CopyCat.propTypes ={
  copying: PropTypes.string.isRequired,
  toggleTape: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  name: PropTypes.string
}

