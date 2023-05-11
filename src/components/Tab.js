import React, { useState } from 'react';
import '../App.css';

function Tab({
  tabName, id, currentTab, setCurrentTab, deleteTab,
}) {
  const [currentTabName, setTabName] = useState(tabName);
  const editTabName = (e) => {
    setTabName(e.target.value);
  };
  return (
    <div className="main-wrapper">
      <button type="button" className={currentTab === id ? 'tab-active' : 'tab'} onClick={() => setCurrentTab(id)}>
        <input className="tab-input" value={currentTabName} onChange={editTabName} />
        <button type="button" className="delete-tab-btn" onClick={() => deleteTab(id)}>X</button>
      </button>
    </div>
  );
}

export default Tab;
