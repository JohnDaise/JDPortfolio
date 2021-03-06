// Components

import Header from './Containers/Header';
import Body from './Containers/Body';
import Footer from './Containers/Footer';

// import logo from './logo.svg';
// Styling
import './App.css';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
