import React, { useState, useRef } from 'react';
import './VideoEditor.css';
import VideoSeekBar from '../VideoSeekBar/VideoSeekBar';


const VideoEditor = ({src}) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (event) => {
    const time = parseFloat(event.target.value);
    if (!isNaN(time) && videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };



  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };
  return (
    <div className="video-editor">
      <video
        ref={videoRef}
        src={src}
        className="video"
        controls
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
      <input
        type="range"
        className="seek-bar"
        min={0}
        max={duration}
        step={1}
        value={currentTime}
        onChange={handleSeek}
      />
      </div>
      {/* Seek New */}
      <div>
      <VideoSeekBar
            value={currentTime}
            onChange={(e, v) => handleSeek}
            max={duration}
          />
      </div>

      <div>

</div>
    </div>
  );
};

export default VideoEditor;
