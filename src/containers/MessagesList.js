import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)


//https://react-redux.js.org/api/connect :
/*The connect() function connects a React component to a Redux store.
It provides its connected component with the pieces of the data 
it needs from the store, and the functions it can use to dispatch actions to the store. */