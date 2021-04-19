import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height = "100vh"
            projectID = "d8870954-ae9a-48cc-8cd3-727f6fd00e50"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;