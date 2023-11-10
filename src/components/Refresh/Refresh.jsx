import React, { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Refresh = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="modal fade show"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        overflow: 'hidden',
      }}
    >
      <ThreeDots width="160" color="#ffc107" />
    </div>
  );
};

export default Refresh;
