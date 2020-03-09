import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import { IPage } from '../../interfaces/IPage';

const Bids = (props: IPage) => {
  console.log(props);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]); // count가 바뀔 때만 effect를 재실행합니다.

  return (
    <PageLayout {...props}>
      Bids
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </PageLayout>
  );
};

export default Bids;
