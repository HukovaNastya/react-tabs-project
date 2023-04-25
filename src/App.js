import React, {useState} from 'react';
import './App.css';
import AddTabsBtn from './components/TabsBtn';
import Tabs from './components/Tabs';
import tabsInfo from './services/tabsInfo';
import newTabsArray from './services/newTabArray';

function App() {
  const[currentTab, setCurrentTab] = useState(0);
  const[content, setContent] = useState(tabsInfo[0])

  const createdTab = () => {
    if(tabsInfo.length === 0){
      tabsInfo.push({ id: 0, name: 'Tab 1', detail: 'Today is Monday. Monday is nice day.'})
      setCurrentTab(0)
    }else{
      const newIndex = currentTab + 1
      tabsInfo.push(newTabsArray[currentTab])
      setCurrentTab(newIndex)
      setContent(tabsInfo[newIndex])
    }
  }

  return (
    <div className="App">
      <h1>React Tabs project</h1>
      <AddTabsBtn onBtnClick={createdTab}/>
      <Tabs 
        tabsInfo ={tabsInfo} 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        setContent={setContent}
      />
      <div className='tab-info'>
        <h1 className='tabs-info-content'>{content.detail}</h1>
      </div>
    </div>
  );
}

export default App;
