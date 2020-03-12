import React from 'react';
import { RouteComponentProps } from 'react-router';
import Progressbar from './progressbar/Progressbar';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const Page: React.FC<RouteComponentProps> = props => {
  const selectProgressbarState = (state: RootState) => {
    return state.progressbar;
  };

  const progressbarState = useSelector(selectProgressbarState);

  const { children } = props;

  return (
    <div>
      <div>{children}</div>
      {progressbarState.isShow && <Progressbar />}
    </div>
  );
};

export default Page;
