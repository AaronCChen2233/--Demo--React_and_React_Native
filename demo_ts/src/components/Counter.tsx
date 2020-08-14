import React from "react";

interface CounterProps {
  initialCount:number
}

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: props.initialCount };
    // this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount() {
    /**the only way to update your state is by calling setState()
     * setState will marge all of then and run asynchronously
     */
    this.setState({count: this.state.count + 1});
    /**if you want to do this again should use prevState */
    // this.setState((prevState : CounterState) =>{
    //     return {count:prevState.count + 1}
    // })
  }

  decrementCount() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <React.Fragment>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.increaseCount()}>Increment</button>
        <button onClick={() => this.decrementCount()}>Decrement</button>
      </React.Fragment>
    );
  }
}

export default Counter;
