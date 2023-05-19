import Router from './Router';
import './App.css';


function App() {

  const array = [1,2,3,4,5];
  const highest = Math.max(...array)
  const lowest = Math.min(...array)

  console.log(highest);





  return (
    <div className="App">
     <Router/>
    </div>
  );
}

export default App;
