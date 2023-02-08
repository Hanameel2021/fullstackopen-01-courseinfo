import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Anecdotes = ({anecdotes, votes}) => (

<>
{anecdotes}
<hr/>
has {votes} votes
</>

)


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

const handleRandomise = () => {

  setSelected(Math.floor(Math.random() * anecdotes.length))

}

const handleVote = () => {
const copy = [...votes]
copy[selected]++
setVotes(copy)
}

const most = votes.indexOf(Math.max(...votes))

  return (
    <div>
    <h1>Anecdotes of the day</h1>
      <Anecdotes anecdotes={anecdotes[selected]} votes={votes[selected]} />
      <br />
      <button onClick={handleVote}>votes</button>
      <button onClick={handleRandomise}>next anecdotes</button>
      <h2>Anecdotes with the most votes</h2>
      <Anecdotes anecdotes={anecdotes[most]} votes={votes[most]}/>
    </div>
  )
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

