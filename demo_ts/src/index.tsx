import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

ReactDOM.render(<Counter initialCount={14}/>,  document.querySelector('#root'))

// interface AppProps{
//     count : number
// }

// const App = (props : AppProps) => {
//     /**function App returns some jsx */
// return <h1>Hellow World {props.count}</h1>
// }

// let count = 0

// setInterval(
// () => 
//     ReactDOM.render(<App count={count++}/>, document.querySelector('#root')), 1000
// )




