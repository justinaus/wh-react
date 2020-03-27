import { useEffect } from 'react';
import { AnyAction } from 'redux';
import Axios, { CancelTokenSource } from 'axios';
import { useDispatch } from 'react-redux';

function useFetch(
  funcAction: (cancelTokenSource: CancelTokenSource) => AnyAction
) {
  const dispatch = useDispatch();

  useEffect(() => {
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();

    const action = funcAction(source);

    dispatch(action);

    return () => {
      source.cancel('usefetch cancel');
    };
  }, [dispatch, funcAction]);

  return null;
}

export default useFetch;
