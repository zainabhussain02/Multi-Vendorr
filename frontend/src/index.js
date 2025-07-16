// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {Provider} from "react-redux";
// import Store from './redux/store';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );


// ReactDOM.render(
//    <Provider store={Store}>
//     <App/>
//    </Provider>,
//    document.getElementById("root")
// )
// reportWebVitals();




import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ React 18 ke liye
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './redux/store';

// ✅ Ye line change karni hai (React 18 ke mutabiq)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
