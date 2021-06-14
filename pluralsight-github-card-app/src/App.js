import React from 'react';
import CardList from './CardList';
import Form from './Form';
import './App.css';
import testData from './TestData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData,
    };
  }
  addNewProfile = (profileData) => {
    //console.log('App', profileData);
    // const newProfiles = [
    //   ...testData,
    //   {
    //     name: profileData.name,
    //     avatar_url: profileData.avatar_url,
    //     company: profileData.company,
    //   },
    // ];

    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div className="container">
        <div className="display-4">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
