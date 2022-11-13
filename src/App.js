import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
     <Header/>
     <About/>
     <Project/>
     <Contacts/>
     
    </div>
  );
}

export default App;
