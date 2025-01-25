import reactLogo from '@/assets/react.svg';
import HomeLayout from '@/layouts/HomeLayout';
import { counterActions } from '@/store/counter';
import { useDispatch, useSelector } from 'react-redux';

import '@/App.css';
import viteLogo from '/vite.svg';

function Index() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counterStore.count);
  function handleIncrement() {
    dispatch(counterActions.increment());
  }

  return (
    <HomeLayout>
      <div>
        <a rel="noreferrer noopener" href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a rel="noreferrer noopener" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={handleIncrement}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/pages/index.jsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </HomeLayout>
  );
}

export default Index;
