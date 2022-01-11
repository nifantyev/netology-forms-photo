import React from 'react';
import PropTypes from 'prop-types';
import PhotoModel from '../models/PhotoModel';

const PhotoList = ({ photos, onRemove }) => {
  const handleRemove = (evt, id) => {
    evt.preventDefault();
    onRemove(id);
  };

  return (
    <div className="photo-list">
      {photos.map((o) => (
        <div className="photo" key={o.id}>
          <img className="photo__pic" src={o.dataUrl} alt="" />
          <a
            href="#/"
            className="photo__close"
            onClick={(evt) => handleRemove(evt, o.id)}
          >
            X
          </a>
        </div>
      ))}
    </div>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.instanceOf(PhotoModel)).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PhotoList;
