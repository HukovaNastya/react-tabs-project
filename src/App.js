import React, {useState} from 'react';
import './App.css';
import AddTabsBtn from './components/TabsBtn';
import Tabs from './components/Tabs';
import tabsInfo from './services/tabsInfo';
import Tab from './components/Tab';
import newTabsArray from './services/newTabArray';

function App() {
  const[currentTab, setCurrentTab] = useState(0);

  
  // const createTabs = (currentTab) => {
  //   // const { tabs, currentTab } = useState;

  //   const allTabs = tabsInfo.map(tab => {
  //     console.log(tab.id)
  //     return (
  //       <li key={tab.id}>
  //         <Tab currentTab={currentTab}/>
  //          {/* <div className='main-wrapper'>
  //            <div className='tabs-container'>
  //             <div className='tab'>
  //             <h1>{tab.name}</h1>
  //            </div>
  //            <div className='tab-info'>
  //             <h1>{tab.detail}</h1>
  //            </div>
  //          </div>
  //         </div> */}
  //       </li>
  //     );
  //   });

  //   return <ul className="nav nav-tabs">{allTabs}</ul>;
  // };

  const createdTab = () => {
    const newIndex = currentTab + 1
    tabsInfo.push(newTabsArray[currentTab])
    setCurrentTab(newIndex)
    // createTabs(newIndex)
  }

  return (
    <div className="App">
      <h1>React Tabs project</h1>
      <AddTabsBtn onBtnClick={createdTab}/>
      {/* <div className='main-wrapper'>
        <div className='tabs-container'>
          <div className='tab'>
            <h1>{tabsInfo[0].name}</h1>
          </div>
          <div className='tab-info'>
            <h1>{tabsInfo[0].detail}</h1>
          </div>
        </div>
     </div> */}
      <Tabs tabsInfo ={tabsInfo}  currentTab={currentTab}/>
    
    </div>
  );
}

export default App;
