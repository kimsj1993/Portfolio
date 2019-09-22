import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import pic from './seung.jpeg';
import './landing.css'



class Landing extends Component {


    render () {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid container spacing={3} className="landing-grid">
                    <Grid item xs={12}>
                        <img src={pic} className="avatar"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>C++ | Python | React.js | Redux | NodeJS | Express | MYSQL | HTML/CSS </p>
                            <div className="social-links">
                                <a href="http:/google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria_hidden="true"/> 
                                </a>

                                <a href="http:/google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria_hidden="true"/> 
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Landing;