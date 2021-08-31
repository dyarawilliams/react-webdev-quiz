import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Title from './components/Title';
import LoginButton from './components/LoginButton';
import Quiz from './components/Quiz';
import Footer from './components/Footer'

function App() {

  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
        {!isAuthenticated ? (
          <div className="container">
            <div className="row">
              <Title />
              <div className="main">
                <p>Welcome.! <br /> This is the introduction section ... Maybe the direction to the game will go here. This has been a fun journery. <br /> Let's Celebrate.! </p>
                <LoginButton />
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <Quiz />
            </div>
            <Footer />
          </div>
        )}
    </div>
  );
}

export default App;
