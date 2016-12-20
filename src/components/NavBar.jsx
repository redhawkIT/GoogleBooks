import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import Menu from 'material-ui/svg-icons/navigation/menu'
// import SmartSearchBar from '../containers/SmartSearchBar'

const NavBar = ({title, handleToggle, toggleSnackBar}) => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <IconButton onTouchTap={handleToggle}><Menu/></IconButton>
      <ToolbarTitle text={title}/>
    </ToolbarGroup>
    {/* <SmartSearchBar/> */}
    <ToolbarGroup lastChild={true}>
      <RaisedButton
        primary={true}
        label='<(^_^<)'
        // icon={<Menu/>}
        onTouchTap={toggleSnackBar}
      />
    </ToolbarGroup>
  </Toolbar>
)



export default NavBar
