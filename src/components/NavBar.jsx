import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

const NavBar = ({title, handleToggle}) => (
  <AppBar
      title={title}
      iconElementLeft={<IconButton><Menu className="AppBar__Menu"/></IconButton>}
      iconElementRight={<IconButton  iconClassName="muidocs-icon-custom-github"  href='https://github.com/ChrisWiles'/>}
      style={{background: 'none', position:'fixed'}}
      zDepth={0}
      onLeftIconButtonTouchTap={handleToggle}
    />
)

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default NavBar
