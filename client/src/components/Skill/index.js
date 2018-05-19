import React, { Component } from 'react'

import './style.css'
import Button from '../Button'
import RadarChart from '../RadarChart'

class Skill extends Component {
  throwShurikens = () => {
    this.props.changeNinjaImageFunction("shuriken")
    console.log("throwShurikens")
  }

  readBooks = () => {
    this.props.changeNinjaImageFunction("reading")
    console.log("readBooks")
  }

  dissimulation = () => {
    this.props.changeNinjaImageFunction("hidding")
    console.log("dissimulation")
  }

  bodybuilding = () => {
    this.props.changeNinjaImageFunction("strength")
    console.log("bodybuilding")
  }

  juggling = () => {
    this.props.changeNinjaImageFunction("juggling")
    console.log("juggling")
  }

  render () {
    const { skills = {}, currentAction } = this.props
    const {
      strength = 0,
      agility = 0,
      endurance = 0,
      smartness = 0,
      dissimulation = 0
    } = skills
    return (
      <div className='skill'>
        <RadarChart strength={strength} agility={agility} endurance={endurance} smartness={smartness} dissimulation={dissimulation}/>
         <div className="activityButtons">
           <Button title = "Lancer de shurikens" image = "./images/skills/shuriken.png" callBack={this.throwShurikens} disabled={!!currentAction}/>
           <Button title = "Lecture" image = "./images/skills/reading.png" callBack={this.readBooks} disabled={!!currentAction}/>
           <Button title = "Dissimulation" image = "./images/skills/leaf.png" callBack={this.dissimulation} disabled={!!currentAction}/>
           <Button title = "Musculation" image = "./images/skills/bodybuilding.png" callBack={this.bodybuilding} disabled={!!currentAction}/>
           <Button title = "Jonglage" image = "./images/skills/juggling.png" callBack={this.juggling} disabled={!!currentAction}/>
         </div>
      </div>
    )
  }
}

export default Skill
