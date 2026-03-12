import logo from './logo.svg';
import './App.css';
import UseCallback from './components/UseCallback';
import AbdullahSaeed from './components/AbdullahSaeed';

function App() {
  return (
    <div className="App">
      {/* <AbdullahSaeed/> */}
{/* <UseCallback/> */}

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
