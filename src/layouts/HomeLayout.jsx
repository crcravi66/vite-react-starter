import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function HomeLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
