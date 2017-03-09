import React, {Component} from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {AppBar, Drawer, MenuItem} from 'material-ui';


const muiTheme = getMuiTheme(darkBaseTheme);

import {Link} from 'react-router';
// import LinkupLogo from './LinkupLogo';

class App extends Component {
  state = {}

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    // const {
    //   prepareStyles,
    // } = muiTheme;

    const styles = {
      appBar: {
        position:'fixed',
      },
      childContainer : {
        paddingTop: 65,
      }
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="luAdm"
                  onLeftIconButtonTouchTap={this.handleToggle}
                  style={styles.appBar}
          >
          </AppBar>
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <MenuItem onTouchTap={this.handleClose}><Link to="/employees">employees</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/payroll">payroll</Link></MenuItem>
          </Drawer>
          <div style={styles.childContainer}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}


export default App;


/*
 <div style={styles.container}>

 <div className="App-header">
 <img src={logo} className="App-logo pulse" alt="logo"/>
 <h2>luAdm</h2>
 */