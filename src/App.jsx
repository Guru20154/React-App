import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Counter.page.jsx';
import RichTextEditor from './pages/RichTextEditor.page.jsx';
import Navbar from './components/Navbar.jsx';
import UserForm from './pages/UserForm.page.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/profile',
      element: <RichTextEditor />,
    },
    {
      path: '/signup',
      element: <UserForm />,
    }
  ]
);

const App = () => {
  return (
      <>
        <Navbar />
        <RouterProvider router={router} />
      </>
  );
};

export default App;
