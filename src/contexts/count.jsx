import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CountContext = createContext(null);

export const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  if (count === 9) setCount(0);

  const value = { count, setCount };

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
};

CountContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
