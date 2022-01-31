import './App.css';
import Header from "./header"
import MainComp from "./maincomp"
import Helmet from 'react-helmet';


function App() {
  return (
    <> <Helmet bodyAttributes={{style: 'background-color : #D3D3D3'}}/>
      <Header/>
      <MainComp/>
      
      

    </>
  );
}

export default App;
