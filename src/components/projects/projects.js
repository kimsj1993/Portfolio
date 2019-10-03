import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



import Header from '../header/header'
import BackgroundImage from '../../images/landing.jpg'
import Project from './project'

import './project.css'



const styles = theme => ({
    root: {
        flexGrow: 1,
      },
  });

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 0,
        };
    };

    toggleCategories() {
        switch(this.state.value) {
            case 0:
                return (
                    <div className="projects-grid">
                    <Project  className="project" color={"info"} url={"https://github.com/kimsj1993/Father-s-web-server"} language={"React"} title={"Portfolio"} body={"This is developed using several thing such as you liek"} />
                    
                    <Project  color={"info"} language={"React"} title={"Portfolio"} body={"This is developed using several thidlskajdaslkjaslkjdasldkasjdsalkjdas lkjdsalkdasjdalskjdas lkdjsaldaskjdsalkjdaslkdjas ladskjasdlkjadsng such as you liek"} />


                    </div>



                )
            case 1:
                return (
                    <div><h1>This is Angular</h1></div>
                )
            case 2: 
                return (
                    <div><h1>This is Python</h1></div>
                )
            default:
              return <div></div>;
          }
    }


     handleChange = (event, newValue) => { 
        this.setState({value: newValue});
    };

    render () {
        const { classes } = this.props;
        return(
            <div>
                <Header imgUrl={BackgroundImage}/>

                 <div className ="category-tabs">

                        <Paper className={classes.root}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="ALL" />
                                <Tab label="React" />
                                <Tab label="Angular" />
                                <Tab label="Django" />
                                <Tab label="Python" />
                                <Tab label="C, C++" />
                            </Tabs>
                        </Paper>

                        <TabPanel value={this.state.value} index={0} >
                            <Grid container className={classes.root} spacing={2} justify="center">
                                <Grid item xs={10}>
                                    <div className="content">
                                        {this.toggleCategories()}
                                    </div>
                                </Grid>
                            </Grid>
                        </TabPanel>

                        </div>
            </div>

           
        )
    }
}

export default withStyles(styles)(Projects);