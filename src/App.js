import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/NavBar/Banner/Banner';
import RowPost from './Components/NavBar/RowPost/RowPost';
import {orginals,action} from './Urls'
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={orginals}title='Netflix Orginals' islarge />
       <RowPost url={action}title='Action' isSmall/>
    </div>
  );
}

export default App;
