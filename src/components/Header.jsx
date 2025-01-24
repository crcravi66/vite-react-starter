import { useState } from 'react';
import { NavLink, useLocation, useNavigation } from 'react-router';

import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    '0': '#ff7f50',
    '1.0': '#ff7f50'
  },
  barThickness: 5,
  shadowBlur: 2
});

export default function Header() {
  const navigation = useNavigation();
  const location = useLocation();
  const [isNavigating] = useState(navigation.state === 'loading');

  return (
    <>
      {/* <TopBarProgress key={location.key} /> */}
      <header className="items-center justify-between mb-4">
        {/* <h1 className="text-2xl font-bold">Vite + React</h1> */}
        <nav className="inline-flex gap-2">
          <NavLink
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
          >
            Contact
          </NavLink>
          <a href="https://github.com/crcravi66/vite-react-starter">Github</a>

        </nav>
      </header>
    </>
  );
}
