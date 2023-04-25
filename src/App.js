import React, { useState } from 'react';
import './App.css';
import AddTabsBtn from './components/TabsBtn';
import Tabs from './components/Tabs';
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

  const handleDeleteTab = (tabId) => {
    //  если пользователь удаляет табы не по порядку нам нужно подставлять
    //  айди таба соседнего с лева к удаляемому
    setCurrentTab(tabs.length - 1);
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
      <div className="tab-info">
        {currentTab === 0 && <div>Some info for first tab</div>}
        {currentTab === 1 && <div>Some info for second tab</div>}
        {currentTab === 2 && (
        <div>
          Some info for third tab
          <button type="button">Some button</button>
        </div>
        )}
        {currentTab >= 3 && (
        <div>
          For all other tabs
          { currentTab + 1 }
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
