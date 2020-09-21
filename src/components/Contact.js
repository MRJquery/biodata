import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import me from '../image/saya.jpg';

export class Contact extends Component {
  render() {
    return (
      <div className = 'contact-body'>
        <Grid className = 'contact-grid'>
          <Cell col={6}>
            <h2>Ryanprw</h2>
            <img src={me} alt='my pict' style={{height: '250px', borderRadius: '20px'}} />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}>Aku bukanlah seorang visioner<br></br>
            Aku adalah enginner. Aku senang dengan orang-orang yang berjalan-jalan memandangi bintang-bintang, tapi aku memandangi tanah dan aku ingin membenarkan lubang sebelum aku jatuh kedalamnya</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
          <div className = 'contact-list'>
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i class="fas fa-phone-square" aria-hidden='true'/>
                  +62895332193154
                </ListItemContent>
              </ListItem>                           
              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                <i class="fas fa-envelope" aria-hidden='true'/>
                  azuraxz12@gmail.com
                </ListItemContent>
              </ListItem>
            </List>            
          </div>
          <div style={{justifyContent:'space-between', display:'flex', width:'80%', margin:'auto', padding:'20px'}}>
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
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
