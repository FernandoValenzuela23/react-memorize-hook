import logo from './logo.svg';
import './App.css';
import { GestionComponent } from './components/GestionComponent';
import { TareasComponent } from './components/TareasComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <GestionComponent />
        <br />
        <TareasComponent />

      </header>
    </div>
  );
}

export default App;
