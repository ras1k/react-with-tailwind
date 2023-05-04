import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Pricelist from './components/Pricelist/Pricelist';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-2xl'>this is tailwind</h1>
      <Pricelist></Pricelist>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
