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
              <div className="dummyText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam consectetur sit quod magnam veniam, eaque quae! Soluta deleniti laborum amet? </p>
              </div>
              <LoginButton />
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
