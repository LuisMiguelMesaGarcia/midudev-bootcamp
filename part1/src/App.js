import './App.css';
import Mensaje from './Mensaje'

// const Mensaje = () => {
//   return <h1>Hola mundo</h1>
// }

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos Trabajando"/>
      <Mensaje color="blue" message= "En un curso"/>
      <Mensaje color="green" message="De react"/>
      <Description/>
      <br></br>
      {+new Date()}
    </div>
  );
}

export default App;
