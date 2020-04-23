import React, { Component } from 'react';
import './App.scss';
import { Router, navigate } from "@reach/router"
import Home from './Pages/Home'
import Garage from './Pages/Garage'
import PlayerInfo from './Pages/PlayerInfo';
import Clock from './components/Clock';
import { MAX_CLOCK_SPEED, MIN_CLOCK_SPEED } from './definitions';

import Container from "@material-ui/core/Container";
import { CssBaseline, Drawer, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BuildIcon from '@material-ui/icons/Build';

interface AppState {
  hours: number,
  minutes: number,
  clockIntervalId?: NodeJS.Timeout,
  clockSpeed: number,
  drawerOpened: boolean
}

class App extends Component<{}, AppState> {
  constructor(props: any){
    super(props)
    this.state = {
      hours: 12,
      minutes: 0,
      clockSpeed: 1,
      drawerOpened: false
    }
  }

  componentDidMount(){
    this.restartClock()
  }

  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.switchDrawer} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{flexGrow: 1}}>
              DragRacer
            </Typography>
            <Clock 
              hours={this.state.hours} 
              minutes={this.state.minutes} 
              speed={this.state.clockSpeed}
              changeSpeed={this.handleChangeClockSpeed}
              resetSpeed={() => this.setState({clockSpeed: 1}, this.restartClock) }
            />
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor={'left'} open={this.state.drawerOpened} onClose={this.switchDrawer}>
          <List>
            <ListItem button onClick={() => navigate('/garage')}>
              <ListItemIcon><BuildIcon /></ListItemIcon>
              <ListItemText primary='Garage' />
            </ListItem>
          </List>
        </Drawer>
        <Container style={{paddingTop: '20px'}} maxWidth="lg">
          <Router>
            <Home path="/" />
            <PlayerInfo path='/player' />
            <Garage path="/garage" />
          </Router>
        </Container>
      </React.Fragment>
    )};

  handleChangeClockSpeed = (more: boolean) => {
    let newSpeed = more ? this.state.clockSpeed * 2 : this.state.clockSpeed / 2
    if(newSpeed > MAX_CLOCK_SPEED || newSpeed < MIN_CLOCK_SPEED){
      newSpeed = this.state.clockSpeed
    }
    this.setState(
      {
        clockSpeed: newSpeed
      },
      this.restartClock
    )
  }

  restartClock(){
    if(this.state.clockIntervalId){
      clearInterval(this.state.clockIntervalId)
    }
    const intervalId = setInterval( () => {
      const {hours, minutes} = this.state
      let nextHours = minutes === 59 ? hours + 1 : hours
      nextHours = nextHours > 23 ? 0 : nextHours 
      this.setState({
        minutes: minutes === 59 ? 0 : (minutes + 1),
        hours: nextHours
      })
    }, 500 / this.state.clockSpeed)
    this.setState({ 
      clockIntervalId: intervalId 
    })
  }

  switchDrawer = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened })
  }

}

export default App;
