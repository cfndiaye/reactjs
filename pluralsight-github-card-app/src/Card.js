import React from 'react';
//import testData from './TestData';
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <img alt="card" src={profile.avatar_url} height="75" width="75" />
        <div
          className="info"
          style={{ display: 'inline-block', marginLeft: 10 }}
        >
          <div className="name" style={{ fontSize: '125%' }}>
            {profile.name}
          </div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
