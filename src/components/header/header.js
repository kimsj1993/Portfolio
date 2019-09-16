import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import './header.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      color: '#FFF',
      textDecoration: 'none',
      marginRight: theme.spacing(2)
  }
}));

function Header() {
  const classes = useStyles();

  return (
<div className={classes.root}>
      <AppBar position="static" className="header-color">
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Title
          </Typography>
          <Button color="inherit"><Link className={classes.link} to='/resume'>Resume</Link></Button>
          <Button color="inherit"><Link className={classes.link} to='/about'>About Me</Link></Button>
          <Button color="inherit"><Link className={classes.link} to='/projects'>Projects</Link></Button>
          <Button color="inherit"><Link className={classes.link} to='/contact'>Contact</Link></Button>

        </Toolbar>
      </AppBar>

      

    </div>
  );
}

export default Header;
