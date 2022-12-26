import './App.css';
import Filmcard from './Components/Filmcard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Secondheader from './Components/Secondheader';
import Topheader from './Components/Topheader';
import Topicbar from './Components/Topicbar';

function App() {
  return (
    <>
    <Topheader/>
    <Secondheader/>
    <Navbar/>
    <Topicbar/>
    <Filmcard/>
    <Footer/>
    </>
  );
}

export default App;
