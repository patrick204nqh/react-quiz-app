import React from 'react'

class ClassComponent extends React.Component {
  render() {
    return (
      <p style={{ color: '#fff' }}>Hello from class component</p>
    )
  }
}

const FunctionalComponent = props => {
  return (
    <p style={{ color: '#fff' }}>Hello {props.name}</p>
  )
}

export { FunctionalComponent, ClassComponent }