import React from 'react';
import Tab from './Tab';
import '../App.css';

function Tabs({
  tabsList, currentTab, setCurrentTab, onTabDelete,
}) {
  const deleteTab = (deleteTabId) => {
    onTabDelete(deleteTabId);
  };

  const allTabs = tabsList.map((tab) => (
    <div key={tab.id}>
      <Tab
        id={tab.id}
        tabName={tab.name}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        deleteTab={deleteTab}
      />
    </div>
  ));

  return (
    <div className="main-wrapper">{allTabs}</div>
  );
}

export default Tabs;
