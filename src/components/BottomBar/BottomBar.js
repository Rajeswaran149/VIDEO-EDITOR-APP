// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faCrop, faMusic, faTextHeight, faExpand, faObjectGroup, faFileExport } from '@fortawesome/free-solid-svg-icons';
import './RightBar.css'; // Import your CSS file here
import Volume from '../RightIcons/Volume';
import Speed from '../RightIcons/Speed';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Grid } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';
import MusicPlayerSlider from '../RightIcons/Music';

function BottomBar() {
  const [show, setShow] = useState(false);
  const[className,setClassName]=useState()
  

  return (
    <div className="right-bar">
      <ul>
     
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
          <VolumeUp />
        </Grid>
      </div>
      
      <div className='right-bar-content'>
      <Speed/>
      </div>
        </li>

        <li>
        <div className='right-bar-icon'>
      <Grid item>
          <VolumeUp />
        </Grid>
      </div>
      
      <div className='right-bar-content'>
      <MusicPlayerSlider/>
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


export default BottomBar