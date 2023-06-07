import Header from './components/Header';
import TopBar from './components/TopBar';
import Cards from './components/Cards';
import './App.css';

function App() {
  return (
    <>
    <div className="App-div">
      <TopBar></TopBar>
      <Header></Header>
    </div>
    <Cards></Cards>
    </>
  );
}

export default App;
