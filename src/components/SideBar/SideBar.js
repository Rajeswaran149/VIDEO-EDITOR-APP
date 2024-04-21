// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faCrop, faMusic, faTextHeight, faExpand, faObjectGroup, 
  faFileExport ,faRegular,faCirclePlay, faRecordVinyl,faShapes, faUpload} from '@fortawesome/free-solid-svg-icons';
import './SideBar.css'; // Import your CSS file here

const Sidebar = ({
    handleTrim,
    handleSplit,
    handleAddMusic,
    handleAddText,
    handleCropResize,
    handleMergeClips,
    handleExportVideo
}) => {
  return (
    <div className="sidebar">
      <ul>
        <li><FontAwesomeIcon icon={faCut} 
        onClick={handleTrim}/>
        <div>Trim</div></li>
        <li><FontAwesomeIcon icon={faCrop} 
        onClick={handleSplit}/>
        <div>Split</div> </li>
        <li><FontAwesomeIcon icon={faMusic}
        onClick={handleAddMusic} /> 
        <div>
      Music
          </div></li>
        <li><FontAwesomeIcon icon={faTextHeight} 
        onClick={handleAddText}/><div>
          Text</div></li>
        <li><FontAwesomeIcon icon={faExpand} 
        onClick={handleCropResize}/>
        <div>
        Resize</div></li>
        
        <li><FontAwesomeIcon icon={faObjectGroup}
        onClick={handleMergeClips} /><div>
          Merge</div> </li>
        <li><FontAwesomeIcon icon={faFileExport} 
        onClick={handleExportVideo}/>
        <div>
        Export</div></li>
        <li><FontAwesomeIcon icon={faCirclePlay} />
        <div>
        Video</div></li>

        <li><FontAwesomeIcon icon={faRecordVinyl} />
        <div>
        Record</div></li>

        <li><FontAwesomeIcon icon={faShapes} />
        <div>
        Element</div></li>
         <li><FontAwesomeIcon icon={faUpload} />
        <div>
        Upload</div></li>

      </ul>
    </div>
  );
};

{/* <FontAwesomeIcon icon="fa-duotone fa-record-vinyl" /> */}

export default Sidebar;
