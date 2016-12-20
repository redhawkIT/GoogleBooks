import React, {PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import {IndexLink, Link} from 'react-router'
import {ListItem} from 'material-ui/List'
import Home from 'material-ui/svg-icons/action/home'
import About from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'

const SlideDrawer = ({handleToggle, open, setTitle}) => (
   <Drawer
      width={300}
      docked={false}
      open={open}
      onRequestChange={e => handleToggle(e) }
      >
      <div className='subHeader'>Christopher Wiles</div>
      <IndexLink to="/" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Home" leftIcon={<Home/>} onTouchTap={e => setTitle('Home')}/>
      </IndexLink>
      <Link to="/about" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="About Me" leftIcon={<About/>} onTouchTap={e => setTitle('About')}/>
      </Link>
      <Link to="/info" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Info" leftIcon={<Info/>} onTouchTap={e => setTitle('Info')}/>
      </Link>
    </Drawer>
)

SlideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired
}

export default SlideDrawer
