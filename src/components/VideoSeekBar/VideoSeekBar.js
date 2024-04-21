import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import  "./VideoSeekBar.css"
import { Slider } from "@mui/material";
const VideoSeekBar = ({ value, onChange,max }) => {
  return (
    <div className="d-flex align-items-center">
      <Slider
        value={value}
        onChange={onChange}
        classes={{ container: "custom-slider-container" }}
        color="primary"
        aria-label="volume"
        valueLabelDisplay="auto"
        min={0}
        max={max}
      />
    </div>
  );
};

export default VideoSeekBar;