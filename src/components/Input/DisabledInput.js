import React, { Component } from 'react';

export default class DisabledInput extends Component {
  render() {
    const { id, text, value, className } = this.props;

    return (
      <div className="col s3">
        <label htmlFor={id}>{text}</label>
        <input
          className={className}
          id={id}
          type="text"
          value={value}
          disabled
        />
      </div>
    );
  }
}
