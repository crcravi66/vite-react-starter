import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router';
import routes from '~react-pages';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      {/* <Router>
      </Router> */}
      <RouterProvider router={router}>
      </RouterProvider>
    </main>
  );
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  );
}
