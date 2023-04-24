import Tab from './Tab';
import '../App.css';
const Tabs = ({tabsInfo, currentTab, setCurrentTab}) => {
  const deleteTab = (currentTab) => {
    const tabToDeleteIndex = tabsInfo.findIndex(tab => tab.id === currentTab);
    tabsInfo.splice(tabToDeleteIndex, 1)
    let previousTab = tabsInfo[tabToDeleteIndex - 1];
    // if(tabToDeleteIndex === 0){
    //   previousTab = tabsInfo[tabToDeleteIndex + 1]
    // }
    setCurrentTab(previousTab)
  }

  const allTabs = tabsInfo.map(tab => {
    return (
      <div key={tab.id}>
        <Tab 
          id={tab.id} 
          tabName={tab.name} 
          tabDetail={tab.detail} 
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          deleteTab={deleteTab}
        />
             {/* <div className='tab-info'>
         <h1 className='tabs-info-content'>{tabsInfo[currentTab].detail}</h1>
     </div> */}
      </div>
    );
  });
  
 return <div className="main-wrapper">{allTabs}</div>;
}

export default Tabs;