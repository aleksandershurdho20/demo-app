import React from 'react';

const FacePositionGuide = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg 
        viewBox="0 0 400 300" 
        className="w-full h-full"
      >
        <path
          d="M0 0 h400 v300 h-400 Z
             M200 150 
             a60 80 0 1 0 0.1 0 Z"
          fill="rgba(0, 0, 0, 0.3)"
          fillRule="evenodd"
        />
        
        <ellipse
          cx="200"
          cy="150"
          rx="60"
          ry="80"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        
        <line x1="190" y1="150" x2="210" y2="150" stroke="#ffffff" strokeWidth="2" />
        <line x1="200" y1="140" x2="200" y2="160" stroke="#ffffff" strokeWidth="2" />
        
        <text
          x="200"
          y="260"
          textAnchor="middle"
          fill="white"
          className="text-sm"
        >
          Position your face in the oval
        </text>
      </svg>
    </div>
  );
};

export default FacePositionGuide;