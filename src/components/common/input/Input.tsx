import React, { Component } from 'react';

interface IProps {
  value: string;
  handleChange: (
    value: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => void;
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

    let valueResult: string;

    if (value.length > maxLengthResult) {
      valueResult = value.slice(0, maxLengthResult);
      handleChange(valueResult);
    } else {
      valueResult = value;
    }

    return (
      <div>
        <input
          type="text"
          value={valueResult}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.currentTarget.value, e)
          }
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={maxLengthResult}
        />
      </div>
    );
  }
}
