import logo from './logo.svg';
import './App.css';
import UseCallback from './components/UseCallback';
import Junaid from './components/Junaid';

function App() {
  return (
    <div className="App">

  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<UseCallback/>}/>
      <Route exact path='/okAdduser' element={<Junaid/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
