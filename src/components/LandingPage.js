import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import me from '../image/saya.jpg';

export class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className ='LP-Grid'>
          <Cell col = {12}>
            <img
              src = {me}
              alt = 'avatar'
              className = 'avatar-img'
            />
            <div className='banner-text'>
              <h1>Front End Developer </h1>
              <hr />
              <p>HTML/css | Bootstrap | JavaScript | ReactJS </p>
              <div className='sosial-link'>
                <a href='https://www.instagram.com/ryanprw/' target='blank'>
                  <i class="fab fa-instagram"></i>
                </a>
                <a href='https://twitter.com/heloword_?lang=en' target='blank'>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href='https://github.com/MRJquery' target='blank'>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
