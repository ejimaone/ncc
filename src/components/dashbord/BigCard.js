import React from "react";

function BigCard() {
  return (
    <div className="h-72 w-[88%] mx-auto rounded-lg shadow-lg border-2  my-5 flex flex-col justify-around items-center  text-center px-5 lg:h-80">
      <div className="h-20 w-20 bg-blue-100 rounded-full grid place-items-center mx-auto my-4 ">
        <svg
          width="45"
          height="45"
          viewBox="0 0 65 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.4568 59.4604L60.117 46.5197C59.1701 43.758 56.4873 41.8643 53.5678 41.8643C53.1732 41.8643 52.7787 41.8643 52.4631 41.9432C52.3842 42.0221 38.1021 44.5471 32.4998 44.5471C26.8975 44.5471 12.6154 42.0221 12.4576 42.0221C12.0631 41.9432 11.6686 41.9432 11.3529 41.9432C8.4334 41.9432 5.75058 43.8369 4.80371 46.5986L0.463866 59.5393C-0.0884782 61.2752 0.148241 63.09 1.09512 64.5104C2.04199 65.9307 3.69902 66.7197 5.59277 66.7197H59.249C61.1428 66.7197 62.7209 65.9307 63.7467 64.5104C64.7725 63.09 65.0881 61.2752 64.4568 59.4604ZM59.3279 63.4846H5.67168C3.93574 63.4846 2.98887 62.1432 3.54121 60.4861L7.88105 47.5455C8.35449 46.0463 9.85371 45.0205 11.4318 45.0205C11.5896 45.0205 11.8264 45.0205 11.9842 45.0994C11.9842 45.0994 26.5818 47.7033 32.5787 47.7033C38.5756 47.7033 53.1732 45.0994 53.1732 45.0994C53.331 45.0994 53.5678 45.0205 53.7256 45.0205C55.2248 45.0205 56.8029 46.0463 57.2764 47.5455L61.6162 60.4861C62.0107 62.1432 61.0639 63.4846 59.3279 63.4846Z"
            fill="#2A78D0"
          ></path>
          <path
            d="M32.4998 41.3906C41.9685 41.3117 48.8334 30.8961 49.8592 21.1906C50.5693 14.3258 49.2279 9.03906 45.9927 5.40937C42.9943 2.09531 38.4177 0.359375 32.5787 0.359375C26.7396 0.359375 22.1631 2.09531 19.1646 5.40937C15.8506 9.03906 14.5881 14.3258 15.2982 21.1906C16.2451 30.8961 23.1099 41.3117 32.4998 41.3906ZM46.7029 20.875C45.756 29.7914 39.6802 38.2344 32.4998 38.2344C25.3982 38.2344 19.2435 29.7914 18.2967 20.875C17.981 17.482 18.1388 14.3258 19.0068 11.643C21.2162 12.9055 25.7927 15.1148 30.8427 15.1148C33.131 15.1148 35.4982 14.6414 37.7865 13.4578L39.3646 12.6687L37.2342 9.35469C39.9959 8.56563 43.6256 9.67031 45.5193 10.4594C46.7818 13.3789 47.0974 17.0086 46.7029 20.875ZM32.4998 3.51562C36.7607 3.51562 39.8381 4.54141 42.1263 6.19844C39.5224 5.725 36.4451 5.725 33.999 7.46094L32.7365 8.32891L34.7881 11.3273C29.0279 13.2211 22.7154 10.0648 20.4271 8.72344C22.6365 5.56719 26.424 3.51562 32.4998 3.51562Z"
            fill="#2A78D0"
          ></path>
        </svg>
      </div>
      <p className="font-semibold text-center"> Pay for Registration Quota</p>
      <p className=" font-extralight">
        Click on the button below to make payment for NCEE registration
      </p>
      <button className="h-14 w-full bg-blue-500 rounded text-white mb-3">
        Purchase Quota
      </button>
    </div>
  );
}

export default BigCard;
