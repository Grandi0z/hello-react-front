import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRadomGreetings from '../utils/fetchApi';

const Greetings = () => {
  const { greetings, error, isLoading } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRadomGreetings());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = (<div>is isLoading</div>);
  } else if (error) {
    content = <div>something wrong</div>;
  } else {
    content = (
      <h1>
        {greetings.message}
        🖐️
      </h1>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Greetings;
