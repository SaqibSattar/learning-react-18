import React from 'react'

const ChildrenComponent = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.greetHandle('Child')
        }}
      >
        Click
      </button>{' '}
    </div>
  )
}

export default ChildrenComponent
