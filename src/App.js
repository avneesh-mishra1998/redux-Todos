import './App.css';
import Todo from './components/Todo';
import About from './components/About';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Todo/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
