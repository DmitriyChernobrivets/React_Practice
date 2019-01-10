import React, { Component } from 'react';
import Button from './button';
import Tab from './tab';

export default class Tabs extends Component {
  state = {
    activeIndex: 0
  };
  setActiveTab = idx => {
    this.setState({
      activeIndex: idx
    });
  };
  shouldComponentUpdate(nextProp, nextState) {
    console.log('this.state: ', this.props);
    console.log('nextState: ', nextProp);
    return true;
  }
  render() {
    console.log(`Render :${Date.now()} `);
    const { items } = this.props;
    const { activeIndex } = this.state;

    return (
      <div>
        <div>
          <Button
            label="Tab 1"
            onClick={() => this.setActiveTab(0)}
            active={activeIndex === 0}
          />
          <Button
            label="Tab 2"
            onClick={() => this.setActiveTab(1)}
            active={activeIndex === 1}
          />
        </div>
        <Tab
          title={items[activeIndex].title}
          descr={items[activeIndex].descr}
        />
      </div>
    );
  }
}
