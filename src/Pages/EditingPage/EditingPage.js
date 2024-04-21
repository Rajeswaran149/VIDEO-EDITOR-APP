// VideoEditor.js
import React, { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { useDropzone } from 'react-dropzone';

import "./EditingPage.css"
import Sidebar from '../../components/SideBar/SideBar';
import VideoEditor from '../../components/VideoEditor/VideoEditor';
import New from '../../components/new/New';
import RightBar from '../../components/RightBar/RightBar';
import VideoEditorNew from '../../VideoEditor/VideoEditor';

const EditingPage = () => {
  const [video, setVideo] = useState(null);
  const [editedVideo, setEditedVideo] = useState(null);
  const ffmpeg = createFFmpeg({ log: true });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'video/*',
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setVideo(URL.createObjectURL(file));
    },
  });

  
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  const handleTrim = async () => {
    if (!video) {
      console.error('No video selected');
      return;
    }

    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(video));
    await ffmpeg.run('-i', 'input.mp4', '-ss', '00:00:05', '-t', '00:00:10', 'output.mp4');
    const data = ffmpeg.FS('readFile', 'output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    setEditedVideo(URL.createObjectURL(blob));
  };

  
 
  const handleSplit = async () => {
    if (!video) return;
    
    // Split the video into segments using ffmpeg
    const ffmpeg = require('@ffmpeg/ffmpeg');
    const { createFFmpeg, fetchFile } = ffmpeg;
    const ffmpegInstance = createFFmpeg({ log: true });
    
    await ffmpegInstance.load();
    ffmpegInstance.FS('writeFile', 'input.mp4', await fetchFile(video));
    

    await ffmpegInstance.run('-i', 'input.mp4', '-ss', '00:00:05', '-t', '00:00:05', 'output.mp4');
    
    const data = ffmpegInstance.FS('readFile', 'output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    setEditedVideo(URL.createObjectURL(blob));
  };

  const handleAddMusic = async () => {
    if (!video) return;

    // Add music to the video using ffmpeg
    // Example command: ffmpeg -i input.mp4 -i background_music.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 output.mp4
    // You need to replace 'background_music.mp3' with the path to your music file
    const ffmpeg = require('@ffmpeg/ffmpeg');
    const { createFFmpeg, fetchFile } = ffmpeg;
    const ffmpegInstance = createFFmpeg({ log: true });

    await ffmpegInstance.load();
    ffmpegInstance.FS('writeFile', 'input.mp4', await fetchFile(video));
    ffmpegInstance.FS('writeFile', 'background_music.mp3', await fetchFile('/path/to/background_music.mp3'));
    
    await ffmpegInstance.run('-i', 'input.mp4', '-i', 'background_music.mp3', '-c:v', 'copy', '-c:a', 'aac', '-map', '0:v:0', '-map', '1:a:0', 'output.mp4');
    
    const data = ffmpegInstance.FS('readFile', 'output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    setEditedVideo(URL.createObjectURL(blob));
  };

  
  const handleAddText = async () => {
    if (!video) return;

    // Add text to the video using ffmpeg
    // Example command: ffmpeg -i input.mp4 -vf "drawtext=text='Hello World':x=10:y=10:fontsize=24:fontcolor=white" output.mp4
    const ffmpeg = require('@ffmpeg/ffmpeg');
    const { createFFmpeg, fetchFile } = ffmpeg;
    const ffmpegInstance = createFFmpeg({ log: true });

    await ffmpegInstance.load();
    ffmpegInstance.FS('writeFile', 'input.mp4', await fetchFile(video));

    await ffmpegInstance.run('-i', 'input.mp4', '-vf', "drawtext=text='Hello World':x=10:y=10:fontsize=24:fontcolor=white", 'output.mp4');

    const data = ffmpegInstance.FS('readFile', 'output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    setEditedVideo(URL.createObjectURL(blob));
};

const handleCropResize = async () => {
    if (!video) return;

    // Crop and resize the video using ffmpeg
    // Example command: ffmpeg -i input.mp4 -vf "crop=320:240:100:100,scale=640:480" output.mp4
    const ffmpeg = require('@ffmpeg/ffmpeg');
    const { createFFmpeg, fetchFile } = ffmpeg;
    const ffmpegInstance = createFFmpeg({ log: true });

    await ffmpegInstance.load();
    ffmpegInstance.FS('writeFile', 'input.mp4', await fetchFile(video));

    await ffmpegInstance.run('-i', 'input.mp4', '-vf', "crop=320:240:100:100,scale=640:480", 'output.mp4');

    const data = ffmpegInstance.FS('readFile', 'output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    setEditedVideo(URL.createObjectURL(blob));
};

const handleMergeClips = async () => {
    // Placeholder function for merging video clips
    // You'll need to implement the logic to merge video clips using ffmpeg
};

const handleExportVideo = async () => {
    if (!editedVideo) return;

    // Export the edited video
    // Example command: ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -strict experimental -b:a 128k output.mp4
    const ffmpeg = require('@ffmpeg/ffmpeg');
    const { createFFmpeg, fetchFile } = ffmpeg;
    const ffmpegInstance = createFFmpeg({ log: true });

    await ffmpegInstance.load();
    ffmpegInstance.FS('writeFile', 'input.mp4', await fetchFile(editedVideo));

    await ffmpegInstance.run('-i', 'input.mp4', '-c:v', 'libx264', '-crf', '23', '-c:a', 'aac', '-strict', 'experimental', '-b:a', '128k', 'output.mp4');

    const data = ffmpegInstance.FS('readFile', 'output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    
    // You can use any method to save or download the video, for example:
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'edited_video.mp4';
    downloadLink.click();
};


  return (
    <div className="app-container">
     <div className='left'>
     <Sidebar
     handleTrim={handleTrim}
     handleSplit={handleSplit}
     handleAddMusic={handleAddMusic}
     handleAddText={handleAddText}
     handleCropResize={handleCropResize}
     handleMergeClips={handleMergeClips}
     handleExportVideo={handleExportVideo}
     />
     </div>
     <div className='center'>
     <h1 className='heading'>Welcome to Video Editor</h1>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      <div className='video'>
      {/* {video && <VideoEditor src={video} className="player"/>} */}
      {/* {editedVideo && <New src={editedVideo} className="player"/>} */}
      <VideoEditorNew />
      </div>
      
      <div className="button-container">
        <button className="button" onClick={handleTrim}>Trim</button>
        <button className="button" onClick={handleSplit}>Split</button>
        <button className="button" onClick={handleAddMusic}>Add Music</button>
        <button className="button" onClick={handleAddText}>Add Text</button>
        <button className="button" onClick={handleCropResize}>Crop & Resize</button>
        <button className="button" onClick={handleMergeClips}>Merge Clips</button>
        <button className="button" onClick={handleExportVideo}>Export Video</button>
      </div>
      {editedVideo && <VideoEditor src={editedVideo} className="player"/>}
      
     </div>
     <div className='right'>
     <RightBar/>
     </div>
    </div>
  );
};

export default EditingPage;
