import '../App.css';

const Tab = ({tabName, tabDetail}) => {
  // console.log(tab)
  return (
    <>
      <div className='main-wrapper'>
        <div className='tabs-container'>
          <div className='tab'>
            <h1>{tabName}</h1>
          </div>
          <div className='tab-info'>
            <h1>{tabDetail}</h1>
          </div>
        </div>
     </div>
     {/* <div className='main-wrapper'>
        <div className='tabs-container'>
          <div className='tab'>
            <h1>{tabsInfo[currentTab.name}</h1>
          </div>
          <div className='tab-info'>
            <h1>{tabsInfo[0].detail}</h1>
          </div>
        </div>
     </div> */}
  </>
  )
}

export default Tab;

