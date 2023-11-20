import './App.css';
import Navbar from './Navbar';

let data = new Date();
let godz = data.getHours();
let min = data.getMinutes();
function App() {
  const title = "Witaj!";
  const watch = 5;
  const person = "Kacper Piórkowski"
  const handleClick = () => {
  alert('To jest przycisk :o');
  }
  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <Navbar></Navbar>
        <button onClick={handleClick}>Kliknij mnie</button>
        <p>{godz}:{min}</p>
        <p>{person}</p>
        <p>Obejrzano {watch} raz(y)</p>
      </div>
    </div>
  );
}

export default App;
