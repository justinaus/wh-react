import React, { Component } from 'react';

interface IProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class Input extends Component<IProps> {
  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
    );
  }
}
