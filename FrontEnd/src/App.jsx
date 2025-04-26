// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ComplaintProvider } from './contextApi/complaintContextApi.jsx';
import PoliceComplaintPage from './pages/PoliceComplaintPage.jsx';
import ComplaintDescriptionPage from './pages/ComplaintDescriptionPage.jsx';
import Layout from './pages/Layout.jsx'; // Create this new Layout component

function App() {
  const Router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />, // Use Layout as the parent
        children: [
          {
            path: "/",
            element: <PoliceComplaintPage />
          },
          {
            path: "/complaintDetails/:id",
            element: <ComplaintDescriptionPage />
          }
        ]
      }
  ]);

  return (
    <ComplaintProvider>
      <RouterProvider router={Router} />
    </ComplaintProvider>
  );
}

export default App;
