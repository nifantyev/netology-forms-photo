import React from 'react';
import PropTypes from 'prop-types';

const PhotoSelector = ({ onSelected }) => {
  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', (evt) => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener('error', (evt) => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  };

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
    onSelected(urls);
  };

  return (
    <div className="photo-selector">
      <input
        className="photo-selector__input"
        type="file"
        accept="image/*"
        multiple
        onChange={handleSelect}
      />
      <div className="photo-selector__clickarea">Click to select</div>
    </div>
  );
};

PhotoSelector.propTypes = {
  onSelected: PropTypes.func.isRequired,
};

export default PhotoSelector;
