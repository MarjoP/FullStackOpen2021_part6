import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {
  const dispatch = useDispatch()


  const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    props.createAnecdote(content)
    props.setNotification(`you created a new anecdote '${content}'`, 3)
    // dispatch(createAnecdote(content))
    // dispatch(setNotification(`you created a new anecdote '${content}'`, 3))

  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit ={create}>
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
        </form>
  </div>
  )
}
const mapDispatchToProps = {
  createAnecdote, setNotification
}
const mapStateToProps = (state) => {
  return {
    anecdote: state.anecdote
  }
}

const ConnectedNewAnecdote = connect(mapStateToProps, mapDispatchToProps
)(NewAnecdote)

export default ConnectedNewAnecdote