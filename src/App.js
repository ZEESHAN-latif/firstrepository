
import './App.css';
import Alert from './components/Alert';
import Btnsform from './components/Btnsform';
import Carousel from './components/Carousel';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
// import Select from './components/Select';
import Subheading from './components/Subheading';
// import Paceholder from './components/Paceholder';


function App() {
  return (
    <>
      <div>
        <Alert />
        <Navbar title="TextUtils" aboutText="About Us" />
        <h2>this si checking</h2>
        <Btnsform />
        {/* <Select /> */}
        <Layout />
        <Carousel />
        <Subheading />
        {/* <Paceholder /> */}
       
      </div>
    </>
  );
}

export default App;
