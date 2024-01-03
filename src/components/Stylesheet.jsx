import React from 'react'
import './myStyles.css'
;
const Stylesheet = (props) => {
    let className = props.primary ? 'primary' : '';
  return (
    <h2 className={`${className} font-xl`}>Stylesheet</h2>
  )
}

export default Stylesheet