
import './App.css';
import Hook from './Components/Hook'
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 style={{backgroundColor:'blue',color:"violet"}}>Counter</h1>
       <Counter />
       <Hook />
      </header>
    </div>
  );
}

export default App;
