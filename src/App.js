import React, {useState} from 'react';
import './App.css';
import AddTabsBtn from './components/TabsBtn';
import Tabs from './components/Tabs';
import tabsInfo from './services/tabsInfo';

function App() {
  const[showTabs, setShowTabs] = useState(false);
  return (
    <div className="App">
      <h1>React Tabs project</h1>
      <AddTabsBtn onBtnClick={() => setShowTabs(true)}/>
      <Tabs setShowTabs={setShowTabs} showTabs={showTabs} tabsInfo ={tabsInfo}/>
    </div>
  );
}

export default App;
