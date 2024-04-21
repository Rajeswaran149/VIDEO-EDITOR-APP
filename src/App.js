import './App.css';
import EditingPage from './Pages/EditingPage/EditingPage';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
  <Routes>
  <Route exact path="/" element={<Dashboard/>}/>
  <Route path="/editing-page" element={<EditingPage/>}/>
  {/* <Route path="/editing-page" element={<New/>}/> */}
  </Routes>
    </div>
  );
}

export default App;





// import React from 'react';

// import {
//   Button,
//   Typography,
//   makeStyles,
// } from '@material-ui/core';
// import Player from './New/Player';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   button: {
//     width: '200px',
//     height: '50px',
//     margin: '20px',
//     borderRadius: '50px',
//     backgroundColor: theme.palette.primary.main,
//     color: 'white',
//     '&:hover': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
// }));

// function App() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Typography variant="h2">
//         React Video Player with Bootstrap and MaterialUI
//       </Typography>
//       <Player video='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' 
//       poster='https://i.imgur.com/l4I8f2M.png'/>
//     </div>
//   );
// }

// export default App;
