"use client";

import React, { useState, useRef } from 'react';
import './SVGPathGenerator.css';

const SVGPathGenerator = () => {
  const [pathData, setPathData] = useState('');
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        setImage(img);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  };

  const startDrawing = (e) => {
    isDrawingRef.current = true;
    setPathData(prev => `${prev}M${e.nativeEvent.offsetX},${e.nativeEvent.offsetY} `);
  };

  const drawPath = (e) => {
    if (isDrawingRef.current) {
      setPathData(prev => `${prev}L${e.nativeEvent.offsetX},${e.nativeEvent.offsetY} `);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const endDrawing = () => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      setPathData(prev => `${prev}Z`);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
    }
  };

  const generateSVGPath = () => {
    console.log(pathData);
  };

  return (
    <div className="svg-path-generator">
      <h1>SVG Path Generator</h1>
      <input type="file" onChange={handleImage} />
      <canvas 
        ref={canvasRef} 
        onMouseDown={startDrawing} 
        onMouseMove={drawPath} 
        onMouseUp={endDrawing} 
      ></canvas>
      <div className="controls">
        <button onClick={generateSVGPath}>Generate Path</button>
      </div>
      <div className="output">
        <textarea 
          value={pathData} 
          rows="4" 
          cols="50" 
          readOnly 
          placeholder="SVG Path will be displayed here..." 
        ></textarea>
      </div>
    </div>
  );
};

export default SVGPathGenerator;
