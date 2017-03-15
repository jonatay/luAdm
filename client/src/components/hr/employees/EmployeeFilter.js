/**
 * Created by Jono on 17 02 23.
 */

import React from 'react'

import {Segment, Button, Input, Icon} from 'semantic-ui-react'

const EmployeeFilter = (props) => {
  return (
    <div>
      <Segment>
        <Input icon='search' placeholder='Search...'/>
        <Button.Group style={{paddingLeft: 10}}>
          <Button toggle active={props.empFilter.company === 'aaab' || props.empFilter.company === ''}
                  onClick={() => props.handleFilterCoyClick('aaab')}>
            <Icon name='user outline'><p className="name">sec</p></Icon>
          </Button>
          <Button toggle active={props.empFilter.company === 'aaac' || props.empFilter.company === ''}
                  onClick={() => props.handleFilterCoyClick('aaac')}>
            <Icon name='user outline'><p className="name">tec</p></Icon>
          </Button>
          <Button toggle active={props.empFilter.company === 'aaad' || props.empFilter.company === ''}
                  onClick={() => props.handleFilterCoyClick('aaad')}>
            <Icon name='user outline'><p className="name">rea</p></Icon>
          </Button>
        </Button.Group>
        <Button.Group style={{paddingLeft: 10}}>
          <Button toggle active={props.empFilter.state === 'curr' || props.empFilter.state === ''}
                  onClick={() => props.handleFilterStateClick('curr')}>
            <Icon name='calendar check'><p className="name">curr</p></Icon>
          </Button>
          <Button toggle active={props.empFilter.state === 'past' || props.empFilter.state === ''}
                  onClick={() => props.handleFilterStateClick('past')}>
            <Icon name='calendar times'><p className="name">past</p></Icon>
          </Button>
        </Button.Group>
      </Segment>
    </div>
  )
};

// EmployeeFilter.propTypes = {};
// EmployeeFilter.defaultProps = {};
//
//
export default EmployeeFilter;


/*

 <Toolbar style={this.style.tbMain}>
 <ToolbarGroup firstChild={true} style={this.style.tbGroup}>
 <BottomNavigation selectedIndex={props.selectedIndex}>
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
 <BottomNavigation selectedIndex={props.selectedIndex}>
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