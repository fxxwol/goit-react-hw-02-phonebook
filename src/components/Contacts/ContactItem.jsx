import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contactItem: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};

export default ContactItem;
