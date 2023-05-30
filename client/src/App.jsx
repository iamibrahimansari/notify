import Login from './components/Login';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';
import posts from './data';
import {useState} from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');
  return (
    <div className="app">
      {
        user ?
        <>
          <Navbar />
          {
            posts.map(post => <PostCard key={post.id} {...post} />)
          }
          <span className="username">{user}</span>
        </> :
        <Login setUser={setUser} username={username} setUsername={setUsername} />
      }
    </div>
  )
}

export default App
