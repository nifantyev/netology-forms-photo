import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PhotoSelector from './PhotoSelector';
import PhotoList from './PhotoList';
import PhotoModel from '../models/PhotoModel';

const PhotoManager = () => {
  const [photos, setPhotos] = useState([]);

  const handleSelected = (dataUrls) => {
    setPhotos((prevPhotos) => [
      ...prevPhotos,
      ...dataUrls.map((url) => new PhotoModel(nanoid(), url)),
    ]);
  };

  const handleRemove = (id) => {
    setPhotos((prevPhotos) => prevPhotos.filter((o) => o.id !== id));
  };

  return (
    <div className="photo-manager">
      <PhotoSelector onSelected={handleSelected} />
      <PhotoList photos={photos} onRemove={handleRemove} />
    </div>
  );
};

export default PhotoManager;
