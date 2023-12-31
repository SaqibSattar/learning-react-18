import React from 'react'

const FunctionClick = () => {
  const functionHandle = () => {
    console.log('button clicked')
  }
  return (
    <div>
      <button onClick={functionHandle}>Click me</button>
    </div>
  )
}

export default FunctionClick
