import React from 'react';
import '../App.css';

function Tab({
  tabName, id, currentTab, setCurrentTab, deleteTab,
}) {
  return (
    <div className="main-wrapper">
      <div className="tabs-container">
        <button type="button" className={currentTab === id ? 'tab-active' : 'tab'} onClick={() => setCurrentTab(id)}>
          <h1>{tabName}</h1>
        </button>
        <button type="button" className="delete-tab-btn" onClick={() => deleteTab(id)}>X</button>
      </div>
    </div>
  );
}

export default Tab;
