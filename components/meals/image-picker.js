'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    // The onload function runs one fileReader has read the file.
    fileReader.onload = () => {
      // Accessing file with the .result property and setting it as state.
      setPickedImage(fileReader.result);
    };

    // Tell fileReader to read the file.
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="mb-5">
      <label
        className="block mb-2 text-sm font-medium text-white"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex items-center">
        <div className="h-[10rem] w-[10rem] border rounded border-gray-600 relative flex justify-center items-center">
          {!pickedImage && <p className="text-sm">No image.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The user-selected image." fill />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className="ml-4 inline-block py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-2 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
          type="button"
          onClick={handlePickClick}
        >
          Browse
        </button>
      </div>
    </div>
  );
}
