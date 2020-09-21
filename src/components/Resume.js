import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from '../image/saya.jpg';
import Education from './Education';
import Experience from './Experience';
import Skil from './Skil';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col ={4}>
            <div style={{textAlign:'center'}}>
              <img 
                src={me}
                alt="Avatar"
                style={{height:'200px', borderRadius:'20px'}}
              /> 
            </div>
            <h2 style={{paddingTop:'2em'}}> Ryan Prawira </h2>
            <h4 style={{color:'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>Menyukai hal yang berbau teknologi dan suka belajar dari sebuah kesalahan.</p>
            
            <h4 style={{color:'grey'}}>Address</h4>
            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            <p>JL.HajiBaping, DKI JAKARTA, </p>
          </Cell>
          <Cell col ={8} className='resume-right-cel'>
            <h2>Skill</h2>
            <Skil
              skill = 'ReactJS'
              value = {75}
            />
            <Skil
              skill = 'HTML/CSS'
              value = {80}
            />
            <Skil
              skill = 'Javascript'
              value = {75}
            />
          </Cell>          
        </Grid>
      </div>
    )
  }
}

export default Resume
