import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('설정 없이, props 주어지면, 정상 표시', () => {
    const testValue = 'abc';
    const testPlaceholder = 'test';

    const reactElement = render(
      <Input
        value={testValue}
        handleChange={() => console.log(123)}
        placeholder={testPlaceholder}
      />
    );

    const inputElement = reactElement.getByPlaceholderText(
      testPlaceholder
    ) as HTMLInputElement;

    expect(inputElement.value).toBe(testValue);
  });

  it('설정 없이, props maxlength 주어지면, 텍스트 길이 정상 표시', () => {
    const testValue = 'value test';
    const testPlaceholder = 'test';
    const testMaxLength = 3;

    const reactElement = render(
      <Input
        value={testValue}
        handleChange={() => console.log(123)}
        placeholder={testPlaceholder}
        maxLength={testMaxLength}
      />
    );

    const inputElement = reactElement.getByPlaceholderText(
      testPlaceholder
    ) as HTMLInputElement;

    expect(inputElement.value.length).toBeLessThanOrEqual(testMaxLength);
  });
});
