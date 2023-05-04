import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricelist from './components/Pricelist/Pricelist';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-2xl'>this is tailwind</h1>
      <Pricelist></Pricelist>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
