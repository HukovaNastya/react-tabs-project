import React from 'react';
import '../App.css';

function TabInfo({
  currentTab,
}) {
  return (
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
  );
}

export default TabInfo;
