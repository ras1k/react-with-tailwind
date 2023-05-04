import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricelist from './components/Pricelist/Pricelist';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-2xl'>this is tailwind</h1>
      <Pricelist></Pricelist>
    </div>
  )
}

export default App
