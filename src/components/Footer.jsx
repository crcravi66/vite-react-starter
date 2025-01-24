import { useDark } from '@/hooks/useDark';
import { Icon } from '@iconify/react';

export default function Footer() {
  const { isDark, toggleDark } = useDark();
  function openGithub() {
    window.open('https://github.com/crcravi66/vite-react-starter', '_blank');
  }
  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button aria-label="toggle-dark-mode" type="button" className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <Icon icon="carbon:moon" /> : <Icon icon="carbon:sun" />}
      </button>

      <button type="button" onClick={openGithub} className="icon-btn !outline-none">
        <Icon aria-label="Github" icon="carbon:logo-github" />
      </button>

    </nav>

  );
}
