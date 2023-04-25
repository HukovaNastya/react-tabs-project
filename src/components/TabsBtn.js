import React from 'react';
import './TabsBtn.css';

function AddTabsBtn({ onBtnClick }) {
  return (
    <button type="button" className="tab-btn" onClick={onBtnClick}>
      Add tab
    </button>
  );
}

export default AddTabsBtn;
