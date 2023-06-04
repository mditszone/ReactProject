import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import AppTabs from './Screens/Tabs';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/">
        <Route index={true} element={<App />} />
        <Route index={false} path="tabs/search" element={<AppTabs />} />
      </Route>
  )
);


export default router;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}><App /></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
