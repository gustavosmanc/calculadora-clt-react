import React from 'react';

export default class Bar extends React.Component {
  render() {
    const { value, color = 'rgba(0,0,0,0)' } = this.props;

    return (
      <div
        style={{
          marginTop: '40px',
          width: value + '%',
          height: '20px',
          backgroundColor: color,
        }}
      />
    );
  }
}
