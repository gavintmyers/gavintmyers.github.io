import logo from './moon.png';
import './App.css';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Moon-image" alt="logo" />
        <p></p>
        <br/>
        <code>Gavin Myers personal site</code>
        <br/>
        <code>(in progress)</code>
        <br/>
        <br/>
        <br/>
      </header>
      {/*<body>*/}
        <Portfolio />
      {/*</body>*/}
    </div>
  );
}

export default App;
