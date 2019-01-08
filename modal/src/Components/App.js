import React, { Component } from "react";
import Button from "./button";
import tabs from "./tabs.json";
import Tabs from "./tabs";
import Modal from "./modal";
import "./App.css";

class App extends Component {
  state = {
    isModalOpen: false
  };
  toogleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };
  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="App">
        <Modal onClose={this.toogleModal} isOpen={isModalOpen}>
          <div>
            <h2>Title</h2>
            <p>asdsssssssssss</p>
          </div>
        </Modal>

        <Button label="Open Modal" onClick={this.toogleModal} />

        <hr />

        <Tabs items={tabs} />
      </div>
    );
  }
}

export default App;
