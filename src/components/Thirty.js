import React, { useReducer } from "react";

const initialState = {
  currentImageIndex: 0,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex + 1,
      };
    case "PREVIOUS_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex - 1,
      };
    default:
      return state;
  }
};

const images = [
  "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
  "https://wallpapers.com/images/hd/marvel-pictures-a8zq5u8qw3ega7cx.jpg",
  "https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg",
  "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
];

export default function Thirty() {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  const currentImage = images[state.currentImageIndex];

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        <img src={currentImage} />
      </div>
      <div>
        <button
          className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}
        >
          Previous
        </button>
        <button
          className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => dispatch({ type: "NEXT_IMAGE" })}
        >
          Next
        </button>
      </div>
    </div>
  );
}
