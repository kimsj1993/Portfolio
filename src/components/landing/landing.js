import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './landing.css'
import Header from '../header/header'
import MyPic from '../../images/mypic.jpg'
import Contact from '../contact/contact'


class Landing extends Component {


    render () {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Header/>
                <Grid container spacing={3} className="landing-grid">
                    <Grid item xs={12}>
                        <img alt="avatar"
                             className="avatar"
                             src={MyPic}
                        />
                        <div className="banner-text">
                            <h3>Full Stack Web Developer</h3>
                            <hr />
                            <p>C++ | Python | React.js | Redux | NodeJS | Express | MYSQL | HTML/CSS </p>
                        </div>
                    </Grid>
                </Grid>
                <Contact/>

            </div>
        )
    }
}

export default Landing;