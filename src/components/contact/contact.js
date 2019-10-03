import React, {Component} from 'react';
import './contact.css'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Header from '../header/header'
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
                            <h2>About me</h2>

                            <p style={{width: '100%', margin:'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                            </div>

                            <div className="right-side">
                                <h2>Contact Me</h2>

                                <div className="contact-list">
                                    <List className={classes.root}>
                                    <ListItem>
                                        <i className= "fa fa-phone-square" aria-hidden="true"/>
                                        <p >(979)-402-2488</p>
                                    </ListItem>
                                    <ListItem>
                                        <i className= "fa fa-envelope-square" aria-hidden="true"/>
                                        <p >kim.sjin1221@gmail.com</p>
                                    </ListItem>
                                    <ListItem>
                                        <i className= "fa fa-linkedin" aria-hidden="true"/>
                                        <p ><a href="https://www.linkedin.com/in/seungjin-kim-98b08217a/">LinkedIn</a></p>
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