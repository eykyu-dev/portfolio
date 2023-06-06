import Header from './components/Header';
import TopBar from './components/TopBar';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App-div">
      <TopBar></TopBar>
      <Header></Header>
      <Cards></Cards>
    </div>
  );
}

export default App;
