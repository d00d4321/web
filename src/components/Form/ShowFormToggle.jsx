import React from 'react';
import Clear from 'material-ui/svg-icons/content/clear';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import styles from './ShowFormToggle.css';

const getIcon = (show) => {
  if (!show) {
    return (
      <svg className={styles.svg} viewBox="0 0 24 24">
        <path d="M3,2H21V2H21V4H20.92L15,9.92V22.91L9,16.91V9.91L3.09,4H3V2M11,16.08L13,18.08V9H13.09L18.09,4H5.92L10.92,9H11V16.08Z" />
      </svg>
    );
  }
  return <Clear />;
};

const ShowFormToggle = ({ toggleShowForm, showForm }) => (
  <FloatingActionButton className={!showForm ? styles.filterButton : styles.closeButton} onClick={() => toggleShowForm()}>
    {getIcon(showForm)}
  </FloatingActionButton>
);

// const mapStateToProps = () => ({});

export default ShowFormToggle;
