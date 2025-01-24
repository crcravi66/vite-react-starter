import ErrorLayout from '@/layouts/ErrorLayout';
import { NavLink } from 'react-router';

export default function _all() {
  return (
    <ErrorLayout>
      <div className="text-center">
        <h1 className="text-2xl font-bold">404</h1>
        <p className="mt-4">Page not found.</p>
        <NavLink to="/">Go back to home</NavLink>
      </div>
    </ErrorLayout>
  );
}
