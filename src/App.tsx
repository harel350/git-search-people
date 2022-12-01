import React,{useState} from 'react';
import SearchBox from './components/searchBox/searchBox';
import UserInfo from './components/userInfo/userInfo';
import './App.css';

function App() {
  const [userData,setUserData] = useState({})
  function onSearchHandle(userData: object) {
    setUserData(userData)
    console.log(userData)
  }
  return (
    
    <div className="App">
      <SearchBox onSearch={onSearchHandle} />
    
        <UserInfo userData={userData}/>
    </div>
    
  );
}

export default App;
