
import './App.css';
import Alert from './components/Alert';
import Btnsform from './components/Btnsform';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <div>
        <Alert />
        <Navbar title="TextUtils" aboutText="About Us" />
        <h2>this si checking</h2>
        <Btnsform />
      </div>
    </>
  );
}

export default App;
