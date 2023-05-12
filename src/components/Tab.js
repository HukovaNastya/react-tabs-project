import React, { useState, useRef } from 'react';
import '../App.css';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tab({
  tabName, id, currentTab, setCurrentTab, deleteTab,
}) {
  const [currentTabName, setTabName] = useState(tabName);
  const [editTabNameMode, setEditTabNameMode] = useState(false);
  const [currentClassName, setClassName] = useState('tab-input');
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef(null);
  const editTabName = (e) => {
    console.log(e.target.value);
    setTabName(e.target.value);
    setClassName('tab-input');
    if (e.target.value === '') {
      setClassName('input-error');
    }
  };
  const setEditMode = () => {
    setDisabled(false);
    inputRef.current.focus();
    // setClassName('tab-input:focus');
  };
  const choseCurrentTab = () => {
    setCurrentTab(id);
    setClassName('tab-input-edit');
    setEditTabNameMode(!editTabNameMode);
  };

  return (
    <div className="main-wrapper">
      <button type="button" className={currentTab === id ? 'tab-active' : 'tab'} onClick={choseCurrentTab}>
        <button type="button" className="tab-input-btn">
          <input 
            className={currentClassName} 
            value={currentTabName} 
            onChange={editTabName} 
            onBlur={setEditTabNameMode}
            disabled={disabled}
            ref={inputRef}
          />
        </button>
        {
          currentClassName === 'tab-input'
            ? 
             <button type="button" className="delete-tab-btn" onClick={() => deleteTab(id)}>X</button>
            : 
             <button type="button" className="delete-tab-btn" onClick={() => editTabName}> 
               <FontAwesomeIcon icon={faPencil} onClick={setEditMode}/>
             </button>
        }
      </button>
    </div>
  );
}

export default Tab;
