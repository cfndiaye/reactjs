import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    return (
      <div className="">
        {this.props.profiles.map((profile, index) => (
          <div>
            <Card key={index} {...profile} />
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
