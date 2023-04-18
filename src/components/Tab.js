import '../App.css';

const Tab = ({showTabs, tabsInfo}) => {
  return (
    <>
      {
        showTabs? (
          <div className='main-wrapper'>
            <div className='tabs-container'>
              <div className='tab'>
                 <h1>{tabsInfo[0].tabsName}</h1>
                 {/* <button className='tab-delete-btn'>X</button> */}
              </div>
              <div className='tab-info'>
                <h1>{tabsInfo[0].tabsInfo}</h1>
              </div>
            </div>
            {/* <div className='tabs-container'>
              <div className='tab'>
              </div>
              <div className='tab-info'>
                <h1>{tabsInfo[1].tabsInfo}</h1>
              </div>
            </div> */}
          </div>
            // <button className="tab">
            //    <h1> Tab 1</h1>
            //    {/* <span onClick={() => deleteTab(tabs.id)}>X</span> */}
            // </button>
        ):null
      }
    </>
  )
}

export default Tab;