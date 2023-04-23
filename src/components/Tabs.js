import Tab from './Tab';
import '../App.css';
const Tabs = ({tabsInfo, currentTab, setCurrentTab}) => {

  const allTabs = tabsInfo.map(tab => {
    return (
      <div key={tab.id}>
        <Tab 
          id={tab.id} 
          tabName={tab.name} 
          tabDetail={tab.detail} 
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
    );
  });
  
 return <div className="main-wrapper">{allTabs}</div>;
}

export default Tabs;