import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import Radio from './Radio';

describe('Radio', () => {
  it('props로 데이터 주어지면, 데이터 개수만큼 정상 표시', () => {
    const datas = [
      { id: '0', text: 'test 0' },
      { id: '1', text: 'test 1' },
      { id: '2', text: 'test 2' },
    ];

    const reactElement = render(
      <Radio
        datas={datas}
        selectedId="1"
        onChange={toId => console.log(toId)}
      />
    );

    const elements = reactElement.getAllByTestId(
      'radio_item'
    ) as HTMLInputElement[];

    expect(elements.length).toBe(datas.length);
  });

  it('radio click 이벤트 발생하면, selectedId 값 정상 변경', () => {
    const datas = [
      { id: '0', text: 'test 0' },
      { id: '1', text: 'test 1' },
      { id: '2', text: 'test 2' },
    ];

    let selectedId = '0';

    const reactElement = render(
      <Radio
        datas={datas}
        selectedId={selectedId}
        onChange={toId => (selectedId = toId)}
      />
    );

    const elements = reactElement.getAllByTestId(
      'radio_item'
    ) as HTMLInputElement[];

    const radioLast = elements[elements.length - 1];
    fireEvent.click(radioLast);

    expect(selectedId).toBe(datas[datas.length - 1].id);
  });
});
