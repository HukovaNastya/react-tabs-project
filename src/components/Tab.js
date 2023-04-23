import '../App.css';

const Tab = ({tabName, id, currentTab, setCurrentTab}) => {
  console.log(currentTab, id)
  return (
    <>
      <div className='main-wrapper'>
        <div className='tabs-container'>
          <div className={currentTab === id? "tab-active" : "tab"} onClick={() => setCurrentTab(id)}>
            <h1>{tabName}</h1>
          </div>
        </div>
     </div>
  </>
  )
}

export default Tab;

