import './App.css';
import ToDoLogic from './logic/ToDoLogic';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <ToDoLogic />
      </div>
    </div>
  );
}

export default App;
