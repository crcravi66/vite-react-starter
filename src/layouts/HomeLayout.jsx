import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useNProgress } from '@/hooks/useNprogress';

export default function HomeLayout(props) {
  useNProgress();

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
