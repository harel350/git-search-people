import { useState } from 'react';
import SearchBox from './components/searchBox/searchBox';
import UserInfo from './components/userInfo/userInfo';
import './App.css';
import { Context } from './Context'

function App() {
  const [userData, setUserData] = useState({})

  function onSearchHandle(userData: object) {
    setUserData(userData)
    console.log(userData)
  }
  return (
    <Context.Provider value={{ userData }}>
      <div className="App">
        <SearchBox onSearch={onSearchHandle} />
        <UserInfo />
      </div>
    </Context.Provider>

  );
}

export default App;
