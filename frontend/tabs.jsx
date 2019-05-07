import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 0
    };
  }
  
  selectedTab(num){
    this.setState({selectedTab: num});
  }
  
  render() {
    const tabs = [
      {title: "one", content:"random stuff11"},
      {title: "two", content:"random stuff22"},
      {title: "three", content:"random stuff33"}
    ];

    const tabContent = tabs.map( (tab,idx) => {
      const selected = (idx === this.state.selectedTab) ? true : false;
      return (
        <TabContent 
          key={idx}
          content={tab.content} 
          selected={selected}
        />
        );
    });
    
    const titles = tabs.map((tab, idx) => (
      <h1 key={idx} onClick={()=> this.selectedTab(idx)}>{tab.title}</h1>  
    ));

    return (
      <div>
        <ul>{titles}</ul>
        {tabContent}
      </div>
    );
  }
}

const TabContent = function(props) {
  
  if (!props.selected) return null;
  return (
    <li>
      content: {props.content}
    </li>
  );
  
}

export default Tabs;