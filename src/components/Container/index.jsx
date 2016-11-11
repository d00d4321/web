import React, { PropTypes } from 'react';
import Heading from 'components/Heading';
import Spinner from 'components/Spinner';
import Error from 'components/Error';

export const AsyncContainer = ({ loading, error, children }) => {
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Spinner />;
  }
  return children;
};

const { bool, node, string, object } = PropTypes;

AsyncContainer.propTypes = {
  loading: bool,
  error: bool,
  children: node,
};


const Container = ({ title, style, className, children, error, loading }) => (
  <div className={className} style={{ ...style }}>
    {title && <Heading title={title} />}
    <AsyncContainer error={error} loading={loading}>
      {children}
    </AsyncContainer>
  </div>
);

Container.propTypes = {
  title: string,
  style: object,
  className: string,
  loading: bool,
  error: bool,
  children: node,
};

export default Container;
