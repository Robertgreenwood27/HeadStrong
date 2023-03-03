import React from 'react';
import classNames from 'classnames';


const SectionDivider = ({ bgColor, orientation, }) => {
    const verticalClasses = classNames('w-0.5', 'h-full', bgColor);
    const horizontalClasses = classNames('w-full', 'h-0.5', bgColor);
    const dividerClasses = orientation === 'vertical' ? verticalClasses : horizontalClasses;
  
    return <div className={dividerClasses} />;
  };

export default SectionDivider;
