import React from 'react'
import PropTypes from 'prop-types'

function Grid(props) {
  const gap= props.gap? props.gap:0;
  const col = props.col ? `grid-col-${props.col}`:'';
  const colmd = props.colmd ? `grid-col-md-${props.colmd}`:'';
  const colsm = props.colsm ? `grid-col-sm-${props.colsm}`:''
  return (
    <div className={`grid ${col} ${colmd} ${colsm}`} style={{gap : `${gap}px`}}>
      {props.children}
    </div>
  )
}

Grid.propTypes = {
  col : PropTypes.number.isRequired,
  colmd : PropTypes.number.isRequired,
  colsm : PropTypes.number.isRequired,
  gap:PropTypes.number
}

export default Grid

