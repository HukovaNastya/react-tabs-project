import Tab from './Tab';
import '../App.css';
const Tabs = ({tabsInfo}) => {
  const allTabs = tabsInfo.map(tab => {
    return (
      <div key={tab.id}>
        <Tab key={tab.id} tabName={tab.name} tabDetail={tab.detail}/>
      </div>
    );
  });
  
 return <div className="main-wrapper">{allTabs}</div>;
}

export default Tabs;