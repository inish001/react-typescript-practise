import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const PersonName ={
    firstName: "Nishant",
    lastName: "Fulara"
  }
  const nameList =[
    {
      first:"Nishant",
      last:"Fulara",
    },
    {
      first:"Bruce",
      last:"Wayne"
    },
    {
      first:"Clark",
      last:"Kent"
    }
  ]
  return (
    <div className="App">
       <Greet name ="Nishant" messsages={10} isLoggedIn ={false}/>
       <Person  name = {PersonName}/>
       <PersonList names = {nameList}/>
    </div>
  );
}

export default App;
