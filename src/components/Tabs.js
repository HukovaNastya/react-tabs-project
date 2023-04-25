import Tab from './Tab';
import '../App.css';
const Tabs = ({tabsInfo, currentTab, setCurrentTab, setContent}) => {
  const deleteTab = (currentTab) => {
    const tabToDeleteIndex = tabsInfo.findIndex(tab => tab.id === currentTab);
    tabsInfo.splice(tabToDeleteIndex, 1)
    let previousTab = tabsInfo[tabToDeleteIndex - 1];
    setCurrentTab(previousTab)
    setContent(tabsInfo[tabToDeleteIndex - 1])
    if(tabToDeleteIndex  === 0){
       return setContent({
        detail: ""
       })
    }
  }

  const allTabs = tabsInfo.map(tab => {
    return (
      <>
        <div key={tab.id}>
          <Tab 
            id={tab.id} 
            tabName={tab.name} 
            tabDetail={tab.detail} 
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            deleteTab={deleteTab}
          />
       </div>
      </>
    );
  });
  
 return <div className="main-wrapper">{allTabs}</div>;
}

export default Tabs;
