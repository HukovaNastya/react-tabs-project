import React, { useState } from 'react';
import './App.css';
import AddTabsBtn from './components/TabsBtn';
import Tabs from './components/Tabs';
import TabInfo from './components/TabInfo'
// import tabsInfo from './services/tabsInfo';

const tabsList = [
  { id: 0, name: 'Tab 1' },
  { id: 1, name: 'Tab 2' },
  { id: 2, name: 'Tab 3' },
];

function App() {
  const [tabs, setTabs] = useState(tabsList);
  const [currentTab, setCurrentTab] = useState(0);

  const createdTab = () => {
    const tabId = tabs.length;
    setTabs((prevState) => [...prevState, { id: tabId, name: `Tab ${tabId + 1}` }]);
    setCurrentTab(tabId);
  };

  const setActiveTab = (array, id) => {
    array.forEach((item, index) => {
      if (id === index || id === 0) {
        setCurrentTab(index + 1);
      }
    });
    if (id === (array.length - 1)) {
      setCurrentTab(id - 1);
    }
  };

  const handleDeleteTab = (tabId) => {
    //  если пользователь удаляет табы не по порядку нам нужно подставлять
    //  айди таба соседнего с лева к удаляемому
    setActiveTab(tabs, tabId);
    setTabs((prevState) => prevState.filter((tab) => tab.id !== tabId));
  };

  return (
    <div className="App">
      <h1>React Tabs project</h1>
      <AddTabsBtn onBtnClick={createdTab} />
      <Tabs
        tabsList={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onTabDelete={handleDeleteTab}
      />
      <TabInfo currentTab={currentTab}/>
    </div>
  );
}

export default App;
