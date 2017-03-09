/**
 * Created by Jono on 17 02 23.
 */

import React, {Component} from 'react'
import {Segment, Button, Input, Icon} from 'semantic-ui-react'

class EmployeeFilter extends Component {
  state = {filterCoy: '', filterState: 'curr'};
  handleCoyClick = (coy) => (this.state.filterCoy === coy) ? this.setState({filterCoy: ''}) : this.setState({filterCoy: coy});
  handleStateClick = (state) => (this.state.filterState === state) ? this.setState({filterState: ''}) : this.setState({filterState: state});

  render() {
    return (
      <div>
        <Segment style={ {position: 'fixed', zIndex: 10} }>
          <Input icon='search' placeholder='Search...'/>
          <Button.Group style={{paddingLeft: 10}}>
            <Button toggle active={this.state.filterCoy === 'aaab' || this.state.filterCoy === ''}
                    onClick={() => this.handleCoyClick('aaab')}>
              <Icon name='user outline'><p className="name">sec</p></Icon>
            </Button>
            <Button toggle active={this.state.filterCoy === 'aaac' || this.state.filterCoy === ''}
                    onClick={() => this.handleCoyClick('aaac')}>
              <Icon name='user outline'><p className="name">tec</p></Icon>
            </Button>
            <Button toggle active={this.state.filterCoy === 'aaad' || this.state.filterCoy === ''}
                    onClick={() => this.handleCoyClick('aaad')}>
              <Icon name='user outline'><p className="name">rea</p></Icon>
            </Button>
          </Button.Group>
          <Button.Group style={{paddingLeft: 10}}>
            <Button toggle active={this.state.filterState === 'curr' || this.state.filterState === ''}
                    onClick={() => this.handleStateClick('curr')}>
              <Icon name='calendar check'><p className="name">curr</p></Icon>
            </Button>
            <Button toggle active={this.state.filterState === 'past' || this.state.filterState === ''}
                    onClick={() => this.handleStateClick('past')}>
              <Icon name='calendar times'><p className="name">past</p></Icon>
            </Button>
          </Button.Group>
        </Segment>
        <div
          style={{height: 60}}>{/* this 'uses' the space the toolbar occupies - i.e. no top margin stuffing around */}</div>

      </div>
    );
  }
}

export default EmployeeFilter;


/*

 <Toolbar style={this.style.tbMain}>
 <ToolbarGroup firstChild={true} style={this.style.tbGroup}>
 <BottomNavigation selectedIndex={this.state.selectedIndex}>
 <BottomNavigationItem
 label="sec"
 icon={personIcon}
 onTouchTap={() => this.select(0)}
 style={this.style.tbBtn}
 />
 <BottomNavigationItem
 label="tec"
 icon={personIcon}
 onTouchTap={() => this.select(1)}
 style={this.style.tbBtn}
 />
 <BottomNavigationItem
 label="rea"
 icon={personIcon}
 onTouchTap={() => this.select(2)}
 style={this.style.tbBtn}
 />
 </BottomNavigation>
 </ToolbarGroup>
 <ToolbarGroup firstChild={true} style={this.style.tbGroup}>
 <BottomNavigation selectedIndex={this.state.selectedIndex}>
 <BottomNavigationItem
 label="curr"
 icon={checkedIcon}
 onTouchTap={() => this.select(0)}
 style={this.style.tbBtn}
 />
 <BottomNavigationItem
 label="gone"
 icon={uncheckedIcon}
 onTouchTap={() => this.select(1)}
 style={this.style.tbBtn}
 />
 </BottomNavigation>
 </ToolbarGroup>
 </Toolbar>
 */