import logo from './logo.svg';
import './App.css';
import UseCallback from './components/UseCallback';
import AbdullahSaeed from './components/AbdullahSaeed';

function App() {
  return (
    <div className="App">
   

  <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<AbdullahSaeed/>}/>
      <Route exact path='/okAdd' element={<Junaid/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
