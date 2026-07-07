import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <RouterProvider router={router()} />
    </Suspense>
  );
}

export default App;
