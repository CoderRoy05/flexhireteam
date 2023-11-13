// // import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import Flexhire from './Flexhire';
// // import Profile from './Profile';

// import SignIn from './SignIn';

// function App() {

//   return (
//     <>
//           {/* <Profile /> */}
//       <Flexhire />
//       {/* <SignIn /> */}
//       <Router>

//         {/* <Route path="/SignIn" element={<SignIn />} /> */}
        
//       </Router>
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Flexhire from './Flexhire';
import SignIn from './SignIn';
import Logo from './Logo';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Flexhire/>} />
    <Route path='/SignIn' element={<SignIn/>} />
    <Route path='/Logo' element={<Logo/>} />
  </Routes>
  );
}

export default App;
