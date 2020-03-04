import React, { Component } from 'react';

interface IProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  placeholder?: string;
  maxLength?: number;
}

export default class Input extends Component<IProps> {
  MAX_LENGTH_DEFAULT = 5;

  render() {
    const {
      value,
      handleChange,
      isDisabled,
      placeholder,
      maxLength,
    } = this.props;

    const maxLengthResult = maxLength || this.MAX_LENGTH_DEFAULT;

    const valueResult =
      value.length > maxLengthResult ? value.slice(0, maxLengthResult) : value;

    return (
      <div>
        <input
          type="text"
          value={valueResult}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={maxLengthResult}
        />
      </div>
    );
  }
}
