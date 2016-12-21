import React, {PropTypes} from 'react'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Star from 'material-ui/svg-icons/action/grade'
import IconButton from 'material-ui/IconButton'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
  root: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '1.33em',
    color: '#05828F',
    fontWeight: 800
  }
}

const BookList = ({loading}) => {
  if (loading) {
    return (
      <div style={style.root}>
        <CircularProgress size={3}/>
      </div>
    )
  } else {
    return (
      <div style={style.root}>
        <Paper zDepth={2}>

        </Paper>
      </div>
    )
  }
}


BookList.propTypes = {}

export default BookList
