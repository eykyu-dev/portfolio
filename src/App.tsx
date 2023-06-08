import Header from './components/Header';
import TopBar from './components/TopBar';
import CardShowcase from './components/CardShowcase';
import './App.css';

function App() {
  return (
    <>
    <div className="App-div">
      <TopBar></TopBar>
      <Header></Header>
      <CardShowcase></CardShowcase>
    </div>
    </>
  );
}

export default App;
