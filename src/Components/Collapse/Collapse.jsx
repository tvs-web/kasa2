import React, { useState } from 'react';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';

export default function Collapse(props) {
  const { title, text, equipments, style } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse_${style} `}>
      <div className={`collapse_global_${style}`}>
        <div className={`collapse_button_${style}`} onClick={toggleCollapse}>
          <h3>{title}</h3>
          <img
            className={`collapse_arrow ${isOpen ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          />
        </div>
        {isOpen && (
          <>
            <p>{text}</p>
            {equipments && (
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
