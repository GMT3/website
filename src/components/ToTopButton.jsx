import React from 'react';

const ToTopButton = ({ topBtn, handleClick }) => {
  return (
    <>
      {' '}
      <div
        className={
          !topBtn
            ? 'hidden'
            : 'fixed bottom-5 right-5 h-14 w-14 bg-purple-700 rounded-full drop-shadow-lg flex justify-center items-center'
        }
        onClick={() => {
          handleClick('home');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 animate-pulse text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </>
  );
};

export default ToTopButton;
