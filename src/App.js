import React, {useState} from 'react';
import './App.css';
import AddTabsBtn from './components/TabsBtn';
import Tabs from './components/Tabs';
import tabsInfo from './services/tabsInfo';
import Tab from './components/Tab';
import newTabsArray from './services/newTabArray';

function App() {
  const[currentTab, setCurrentTab] = useState(0);

  const createdTab = () => {
    const newIndex = currentTab + 1
    tabsInfo.push(newTabsArray[currentTab])
    setCurrentTab(newIndex)
  }


  return (
    <div className="App">
      <h1>React Tabs project</h1>
      <AddTabsBtn onBtnClick={createdTab}/>
      <Tabs tabsInfo ={tabsInfo} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <div className='tab-info'>
         <h1 className='tabs-info-content'>{tabsInfo[currentTab].detail}</h1>
     </div>
    </div>
  );
}

export default App;
