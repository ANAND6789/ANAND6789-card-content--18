// import React, { useState } from 'react';
// import './BoxComponent.css';

// const BoxComponent = () => {
//   const [highlightedBox, setHighlightedBox] = useState(null);

//   const handleMouseEnter = (boxNumber) => {
//     setHighlightedBox(boxNumber);
//   };

//   const handleMouseLeave = () => {
//     setHighlightedBox(null);
//   };

//   return (
//     <div className="box-container">
//       <div
//         className={`box ${highlightedBox === 1 ? 'highlight' : ''}`}
//         onMouseEnter={() => handleMouseEnter(1)}
//         onMouseLeave={handleMouseLeave}
//       >
//         <h3>ALL COURSES</h3>
//         <p className={`box-description ${highlightedBox === 1 ? 'visible' : ''}`}>
//           Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.MORE INFO.
//         </p>
//       </div>
//       <div
//         className={`box ${highlightedBox === 2 ? 'highlight' : ''}`}
//         onMouseEnter={() => handleMouseEnter(2)}
//         onMouseLeave={handleMouseLeave}
//       >
//         <h3>VIRTUAL CLASS</h3>
//         <p className={`box-description ${highlightedBox === 2 ? 'visible' : ''}`}>
//           Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.DETAILS
//         </p>
//       </div>
//       <div
//         className={`box ${highlightedBox === 3 ? 'highlight' : ''}`}
//         onMouseEnter={() => handleMouseEnter(3)}
//         onMouseLeave={handleMouseLeave}
//       >
// <h3>
//   REAL MEETING
// </h3>
//         <p className={`box-description ${highlightedBox === 3 ? 'visible' : ''}`}>
//           Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.<a>READ MORE</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BoxComponent;


import React, { useState } from 'react';
import { FiBookOpen, FiMonitor, FiUsers } from 'react-icons/fi';
import './BoxComponent.css';

const BoxComponent = () => {
  const [highlightedBox, setHighlightedBox] = useState(null);

  const handleMouseEnter = (boxNumber) => {
    setHighlightedBox(boxNumber);
  };

  const handleMouseLeave = () => {
    setHighlightedBox(null);
  };

  return (
    <div className="box-container">
      <div
        className={`box ${highlightedBox === 1 ? 'highlight' : ''}`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <h4>
          <FiBookOpen /> ALL COURSES
        </h4>
        <p className={`box-description ${highlightedBox === 1 ? 'visible' : ''}`}>
          Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero. MORE INFO.
        </p>
      </div>
      <div
        className={`box ${highlightedBox === 2 ? 'highlight' : ''}`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <h4>
          <FiMonitor /> VIRTUAL CLASS
        </h4>
        <p className={`box-description ${highlightedBox === 2 ? 'visible' : ''}`}>
          Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero. DETAILS
        </p>
      </div>
      <div
        className={`box ${highlightedBox === 3 ? 'highlight' : ''}`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <h4>
          <FiUsers /> REAL MEETING
        </h4>
        <p className={`box-description ${highlightedBox === 3 ? 'visible' : ''}`}>
          Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero. <a>READ MORE</a>
        </p>
      </div>
    </div>
  );
};

export default BoxComponent;
