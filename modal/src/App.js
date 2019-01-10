import React, { Component } from 'react';
// import Button from './Components/button';
// import tabs from './tabs.json';
// import Tabs from './Components/tabs';
// import Modal from './Components/modal';
import axios from 'axios';
import './App.css';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'react';

class App extends Component {
  state = {
    hits: [],
    loading: false,
    errors: null
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(API + DEFAULT_QUERY)
      .then(response =>
        this.setState({ hits: response.data.hits, loading: false })
      )
      .catch(error => this.setState({ loading: false, errors: error.message }));
  }
  render() {
    const { hits, loading } = this.state;
    return (
      <div>
        {loading && <h1>Loading</h1>}
        {hits.length > 0 && (
          <ul>
            {hits.map(({ objectID, url, title }) => (
              <li key={objectID}>
                <a href={url} target="_blank">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
