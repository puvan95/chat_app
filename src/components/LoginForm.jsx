import {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "d8870954-ae9a-48cc-8cd3-727f6fd00e50", 
            'User-Name': username, 
            'User-Secret': password
        };

        try {
            await axios.get('https://api.chatengine.io/chats', {headers:authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError('Invalid Credentials!');
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        className="input" 
                        placeholder="Username" 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        className="input" 
                        placeholder="Password" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <div align="center">
                        <button className="button" type="submit">
                            <span>Start Chatting</span>
                        </button>
                    </div>

                    <h2 className="error">{error}</h2>

                </form>
            </div>
        </div>
    );

}

export default LoginForm;