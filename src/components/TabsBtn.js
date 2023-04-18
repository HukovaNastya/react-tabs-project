import React from 'react';
import './TabsBtn.css';

const AddTabsBtn = ({onBtnClick}) => {
  return (
    <>
      <button className="tab-btn" onClick={onBtnClick}> 
        Add tab 
      </button>
    </>
  )
}

export default AddTabsBtn;