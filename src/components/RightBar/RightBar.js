// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faCrop, faMusic, faTextHeight, faExpand, faObjectGroup, faFileExport } from '@fortawesome/free-solid-svg-icons';
import './RightBar.css'; // Import your CSS file here
import Volume from '../RightIcons/Volume';
import Speed from '../RightIcons/Speed';
import SpeedIcon from '@mui/icons-material/Speed';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Grid } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';
import MusicPlayerSlider from '../RightIcons/Music';
import TextEditor from '../RightIcons/TextEditor';
import { Col, Container, Image, Row } from 'react-bootstrap';
import avatar from "./avatar-icon-images-4.jpg"

function RightBar() {
  const [show, setShow] = useState(false);
  const[className,setClassName]=useState()
  const handleClose = () =>{ setShow(false)
    setClassName("hide-rightbar")};
  const handleShow = () => {
    setShow(true)
    setClassName("rightbar")
  };


  
  return (
    <div className="right-bar">
      <ul>
     
      <li>
        <div className='right-bar-icon'>
      
      </div>
      
      <div className='right-bar-content'>
      <Grid item>
    
    <img src={avatar} alt="Avatar" 
    style={{width:"100px",height:"100px",borderRadius:"50%"}}></img>
 
        </Grid>
      </div>
        </li>
        <li>


        <div className='right-bar-icon'>
      <Grid item>
          <VolumeUp />
        </Grid>
      </div>
      
      <div className='right-bar-content'>
      <Volume/>
      </div>


        </li>

        <li>
        <div className='right-bar-icon'>
      <Grid item>
      <SpeedIcon/>
        </Grid>
      </div>
      
      <div className='right-bar-content'>
      <Speed/>
      </div>
        </li>

        <li>
        <div className='right-bar-icon'>
      <Grid item>
          <FormatColorTextIcon/>
        </Grid>
      </div>
      
      <div className='right-bar-content'>
      <TextEditor/>
      </div>
        </li>

        <li>

        </li>


        <li>

        </li>
        <li>

        </li>
        
        <li>
       </li>
        <li>

        </li>
        <li>

        </li>

        <li>

        </li>

        <li>

        </li>
         <li>

         </li>

      </ul>
    </div>
  );
}


export default RightBar