import NProgress from 'nprogress';
// useLoadingBar.ts
import { useEffect, useState } from 'react';
import { Router } from 'react-router';

function useLoadingBar() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoadingEffect = () => {
    setIsLoading(true);
  };
  const finishLoadingEffect = () => {
    setIsLoading(false);
    NProgress.done();
  };

  useEffect(() => {
    if (isLoading) {
      // Progress bar will be rendered in first visible element with a
      // .fixed-loading-bar class or, if none exist, the page's body.
      const firstVisibleLoadingBarElement = Array.from(
        window.document.querySelectorAll('.fixed-loading-bar')
      ).filter(
        s =>
          window.getComputedStyle(s).getPropertyValue('display')
          !== 'none'
      )[0];
      const loadingBarParent = firstVisibleLoadingBarElement
        ? `.${firstVisibleLoadingBarElement?.classList?.value
          .split(' ')
          .slice(0, 2)
          .join('.')}`
        : 'body';
      NProgress.configure({
        parent: loadingBarParent
      });
      NProgress.start();
    }

    Router.events.on('routeChangeComplete', finishLoadingEffect);
    return () => {
      Router.events.off('routeChangeComplete', finishLoadingEffect);
    };
  }, [isLoading]);

  return [isLoading, startLoadingEffect, finishLoadingEffect];
}

export default useLoadingBar;
