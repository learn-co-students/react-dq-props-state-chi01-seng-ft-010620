import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state={
      weight: 50
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
    let image;
    const {eyeColor} = this.props
    if(eyeColor === 'blue'){
      image = BlueBaby
    }else if (eyeColor === "sun"){
      image = SunBaby
    }else if (eyeColor === "glowing"){
      image =GlowingBaby
    }else if(eyeColor === ""){
      image =   normalBaby
    }
    const {name , hobby} = this.props.hog
    return (
      <li className="hogbabies">
        <h1>{name}</h1>
        <h3>Weight:{this.state.weight}</h3>
        <h3>Hobby:{hobby}</h3>
        <h4>Eye Color:{this.props.eyeColor}</h4>
          
        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={image} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
