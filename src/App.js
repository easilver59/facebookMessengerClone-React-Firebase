import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() { 
	const[input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState('');

	
useEffect(() => {
// run once when the app component loads
	db.collection('messages')
	.orderBy('timestamp', 'desc') //descending order
	.onSnapshot(snapshot => {  		//stores snapshot in firebase db 
		setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
	})	
}, [] ) 
		
useEffect(() => {
	setUsername(prompt('please enter your name')) 
}, [] ) //condition
	
//Send message logic - Timestamp in firebase
const sendMessage = (event) => {
	event.preventDefault();
	db.collection('messages').add({
		message:input,
		username: username,
		timestamp: firebase.firestore.FieldValue.serverTimestamp()	
	})
	setInput('');
}

// Header Section
  return (
    <div className="App">
	<img src="https://images-na.ssl-images-amazon.com/images/I/513QyICz-NL.png" />
     <h1>Facebook Messenger Clone</h1>
		  <h2> Welcome {username} </h2>
		  
		  <form className="app__form">
			<FormControl className="app__formControl">
				<Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => 						setInput(event.target.value)} />
				<IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" 							type="submit" onClick={sendMessage}>
					<SendIcon />
				</IconButton>
            </FormControl>
		  </form>	
		  <FlipMove>
			  {
				messages.map(({id, message}) => (
					<Message key={id} username={username} message={message} />
				))  
			  }
		  </FlipMove>
    </div>
  );
}

export default App;
