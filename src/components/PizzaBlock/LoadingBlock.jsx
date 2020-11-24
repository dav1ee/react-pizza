import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="136" cy="141" r="115" />
      <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="309" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="416" rx="6" ry="6" width="87" height="31" />
      <rect x="140" y="408" rx="20" ry="20" width="140" height="46" />
    </ContentLoader>
  );
};

export default LoadingBlock;
