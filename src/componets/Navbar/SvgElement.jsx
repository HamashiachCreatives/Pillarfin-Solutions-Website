"use client";
import React, { useEffect, useState } from 'react';

const SvgElement = () => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch('../assets/lg.svg')
      .then(response => response.text())
      .then(data => {
        // Replace color values with #222222
        const modifiedSvg = data.replace(/fill="#[0-9a-fA-F]{6}"/g, 'fill="#222222"');
        setSvgContent(modifiedSvg);
      });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
};

export default SvgElement;
