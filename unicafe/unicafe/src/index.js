import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, bad, neutral }) => {
const all = good + bad + neutral

return all > 0 ? (

<>

<h2>Statistics</h2>

<table>

<tbody>

<p>good {good}</p>

<p>neutral {neutral}</p>

<p>bad {bad}</p>

<p>all {all}</p>

<p>average {(good - bad) / all}</p>

<p>positive {(good / all)}</p>

</tbody>

</table>
</>

) : 

<p>no feedback given</p>



}

const App = () => {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)



const setToGood = newValue => {
  setGood(newValue)
}

const setToBad = newValue => {
setBad(newValue)
}

const setToNeutral = newValue => {
  setNeutral(newValue)
}


return (

<div>

<h1>Give feedback</h1>


<Button onClick={() => setToGood(good + 1)} text="good"/>

<Button onClick={() => setToNeutral(neutral + 1)} text="neutral"/>

<Button onClick={() => setToBad(bad + 1)} text="bad"/>

<Statistics good={good} neutral={neutral} bad={bad} />


</div>

)

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)

