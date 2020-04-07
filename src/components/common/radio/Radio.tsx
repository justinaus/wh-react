import React from 'react';

interface IRadioItem {
  id: string;
  text: string;
}

type Props = {
  datas: IRadioItem[];
  selectedId: string;
  onChange: (toId: string) => void;
};

const radioItem = (
  data: IRadioItem,
  selectedId: string,
  onChange: (toId: string) => void
) => {
  return (
    <div key={data.id}>
      <label>
        <input
          data-testid="radio_item"
          type="radio"
          value={data.id}
          checked={selectedId === data.id}
          onChange={e => onChange(e.target.value)}
        />
        {data.text}
      </label>
    </div>
  );
};

const Radio: React.FC<Props> = ({ datas, selectedId, onChange }) => {
  return (
    <div>
      <form>{datas.map(data => radioItem(data, selectedId, onChange))}</form>
    </div>
  );
};

export default Radio;
