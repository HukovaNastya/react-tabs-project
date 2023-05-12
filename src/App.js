import React, { useEffect, useState } from 'react';
import './App.css';
import AddTabsBtn from './components/TabsBtn';
import Tabs from './components/Tabs';
import TabInfo from './components/TabInfo';

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
    setActiveTab(tabs, tabId);
    setTabs((prevState) => prevState.filter((tab) => tab.id !== tabId));
  };

  const handleChangeTabName = (value, id) => {
    setTabs((prevState) => prevState.map(
      (tab) => (tab.id === id ? { id: tab.id, name: value } : tab),
    ));
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
        onChangeTabName={handleChangeTabName}
      />
      <TabInfo currentTab={currentTab} />
    </div>
  );
}

export default App;
