import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Title from './components/Title';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import User from './components/User';

function App() {

  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
        {!isAuthenticated ? (
          <div className="main">
            <Title />
            <LoginButton />
          </div>
        ) : (
          <div className="profile-info">
            <Title />
            <User />
            <LogoutButton />
            <div className="container-quiz">
              
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
