// import logo from './logo.svg';
// import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Student from './components/Student';
// import EmployeeDetails from './components/Employee';
// import Cars from './components/Cars';
// import Counter from './components/Counter'
import List from './components/list'
import VegetableList from './data/vegetable'
import FruitsList from './data/fruits'


function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <Hello /> */}
      {/* <Student name="John" age = {20} isStudent = {true}/>
      <Student name="Ebin" age = {24} isStudent = {false}/>
      <Student name="Mark" age = {22} isStudent = {false}/>
      <Student name="Jean" age = {21} isStudent = {true}/>
      <EmployeeDetails id = {1} name = "Erick" salary = {25000}/>
      <EmployeeDetails id = {1} name = "Erick" salary = {25000}/> */}
      {/* <EmployeeDetails />
      <Cars />
      <Student /> */}
      {/* <Counter /> */}

      <>
        <List items={VegetableList} category="Vegetable"/>
        <List items={FruitsList} category="Fruits"/>
      </>
    </div>
  );
}

export default App;
