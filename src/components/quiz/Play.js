import React from 'react';

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increaseCount = () => {
    this.setState({
      counter: 5
    });
  }

  render() {
    return (
      <>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increaseCount}>Click Me</button>
      </>
    )
  }
}

export default Play;