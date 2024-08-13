// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from './Layout'; // Import the Layout component
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import './App.css'; // Import any global styles if necessary

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />, // Use Layout as the main component
    children: [
      { path: '/', element: <Step1 /> },
      { path: '/step2', element: <Step2 /> },
      { path: '/step3', element: <Step3 /> },
      { path: '/step4', element: <Step4 /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
