import React from 'react';

const SectionDivider = ({ bgColor, orientation }) => {
  const verticalClasses = `w-0.5 h-full ${bgColor}`;
  const horizontalClasses = `w-full h-0.5 ${bgColor}`;
  const dividerClasses = orientation === 'vertical' ? verticalClasses : horizontalClasses;

  return <div className={dividerClasses} />;
};

export default SectionDivider;

