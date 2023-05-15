import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tab({
  tabName, id, currentTab, setCurrentTab, deleteTab, onChangeTabName,
}) {
  const [currentTabName, setTabName] = useState(tabName);
  const [editTabNameMode, setEditTabNameMode] = useState(false);

  const [isInputDisabled, setInputDisabled] = useState(true);
  const inputRef = useRef(null);

  const editTabName = (e) => {
    setTabName(e.target.value);
  };

  const choseCurrentTab = () => {
    setCurrentTab(id);
  };

  useEffect(() => {
    if (!isInputDisabled) {
      inputRef.current.focus();
    }
  }, [isInputDisabled, inputRef.current]);

  return (
    <div className="main-wrapper">
      <div
        role="button"
        tabIndex={0}
        type="button"
        className={currentTab === id ? 'tab-active' : 'tab'}
        onClick={choseCurrentTab}
      >
        <button
          type="button"
          className="tab-input-btn"
          onClick={() => {
            if (editTabNameMode) return;
            setEditTabNameMode(!editTabNameMode);
            setInputDisabled(false);
          }}
        >
          <input
            type="text"
            className={editTabNameMode ? 'tab-input-edit' : 'tab-input'}
            value={currentTabName}
            onChange={editTabName}
            onBlur={(e) => {
              setEditTabNameMode(false);
              setInputDisabled(true);

              if (e.target.value === tabName) return;
              onChangeTabName(e.target.value, id);
            }}
            disabled={isInputDisabled}
            ref={inputRef}
          />
        </button>
        {
          !editTabNameMode
            ? <button type="button" className="delete-tab-btn" onClick={() => deleteTab(id)}>X</button>
            : (
              <button type="button" className="delete-tab-btn">
                <FontAwesomeIcon icon={faPencil} />
              </button>
            )
        }
      </div>
    </div>
  );
}

export default Tab;
