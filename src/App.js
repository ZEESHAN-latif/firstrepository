
import './App.css';
import Alert from './components/Alert';
import Btnsform from './components/Btnsform';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Paceholder from './components/Paceholder';


function App() {
  return (
    <>
      <div>
        <Alert />
        <Navbar title="TextUtils" aboutText="About Us" />
        <h2>this si checking</h2>
        <Btnsform />
        <Carousel />
        <Paceholder />
      </div>
    </>
  );
}

export default App;
