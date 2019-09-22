import React, {Component} from 'react';
import './contact.css'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      text: {
          fontSize: '25px',
          fontFamily: 'Anton'
      }
  });

class Contact extends Component {
    render () {
        const { classes } = this.props;

        return(
            <div className="contact-root">
                <div className="contact-body">
                        <div className="contact-grid">
                            <div className="left-side">
                            <h2>Seungjin</h2>
                            <img
                                src="http2://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="myPicture"
                                style={{height:'250px'}}
                            />
                            <p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                            </div>


                            <div className="right-side">
                                <h2>Contact Me</h2>
                                <hr/>
                                <div className="contact-list">
                                    <List className={classes.root}>
                                    <ListItem>
                                        <i className= "fa fa-phone-square" aria-hidden="true"/>
                                        <p className={classes.text}>(979)-402-2488</p>
                                    </ListItem>
                                    <ListItem>
                                        <i className= "fa fa-envelope-square" aria-hidden="true"/>
                                        <p className={classes.text}>kim.sjin1221@gmail.com</p>
                                    </ListItem>
                                    <ListItem>
                                        <i className= "fa fa-linkedin" aria-hidden="true"/>
                                        <p className={classes.text}><a href="https://www.linkedin.com/in/seungjin-kim-98b08217a/">LinkedIn</a></p>
                                    </ListItem>
  
                                    </List>

                                </div>
                            
                            </div>
                        </div>


                </div>
            </div>

        )
    }
}

export default withStyles(styles)(Contact);