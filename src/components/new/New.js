// App.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TextField, IconButton } from '@mui/material';
import { PlayArrow, Pause, Stop, Edit,  MusicNote, TextFields, Transform, MergeType, Publish } from '@mui/icons-material';
import './New.css';

function New() {
  return (
    <div className="New">
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center">
          <Col>
            <h1>Video Editor</h1>
            <video id="video" controls className="video">
              <source src="your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="controls">
              <IconButton>
                <PlayArrow />
              </IconButton>
              <IconButton>
                <Pause />
              </IconButton>
              <IconButton>
                <Stop />
              </IconButton>
            </div>
          </Col>
          <Col>
            <h2>Editing Tools</h2>
            <div className="editing-tools">
              <TextField label="Edit Video Title" variant="outlined" fullWidth />
              <TextField
                label="Add Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
              <Button variant="primary" fullWidth>
                Save Changes
              </Button>
              <div className="additional-controls">
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  {/* <Split /> */}
                </IconButton>
                <IconButton>
                  <MusicNote />
                </IconButton>
                <IconButton>
                  <TextFields />
                </IconButton>
                <IconButton>
                  <Transform />
                </IconButton>
                <IconButton>
                  <MergeType />
                </IconButton>
                <IconButton>
                  <Publish />
                </IconButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default New;
