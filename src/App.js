import './App.css';

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <h1>Web Dev Quiz</h1>
      {!isAuthenticated ? (
        <div>
          <p style={{ fontSize: "1.5rem" }}>Welcome to WebDev Scramble</p>
          <LoginButton />
        </div>
      ) : (
        <div>
          <LogoutButton />
          <User />
        </div>
      )}
    </div>
  );
}

export default App;
