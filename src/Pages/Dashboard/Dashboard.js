import React, { useState } from 'react';
import './Dashboard.css'; // Import your CSS file here
import { useNavigate } from 'react-router-dom';
import SearchBar from './searchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Dashboard = () => {
  const navigate=useNavigate()
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchResults([query]);
  };


  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Video Editing App Dashboard</h1>
      </div>
      
     



      <div className="content">
        <div className="sidebar-dash ">
          <ul>
            <li><a href="#">New video +</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">All Videos</a></li>          
          </ul>
        </div>

        <div className="main-content">

          <div className='sub-content'>
          <div>

            <SearchBar className="searchbar" onSearch={handleSearch} />
          </div>
            <div>
              {searchResults.map((result, index) => (
                <p key={index}>{result}</p>
              ))}
            </div>
            <div>
            <AccountCircleIcon />
            </div>

          </div>

          <div className='btns-row'>
            <div className='btns'>
 
                  <button className='action-button'>Create Project</button>
                  <button className="action-button"
                  onClick={()=>navigate("/editing-page")}>Record & Edit Video</button>
 
    
               
            </div>
            <p>All videos > </p>
          </div>

          <h3>Recent videos</h3>
          <div className='card'>
            <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">project 1</Button>
              </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">project 2</Button>
              </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">project 3</Button>
              </Card.Body>
            </Card>
            </div>

          </div>
        </div>

      </div>
      <div className="footer">
        <p>&copy; 2024 Video Editing App</p>
      </div>
    </div>
  );
};

export default Dashboard;


