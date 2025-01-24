import HomeLayout from '@/layouts/HomeLayout';

export default function Contact() {
  return (
    <HomeLayout>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-4">
          You can contact me at
          {' '}
          <a href="mailto:crcravi66@gmail.com">crcravi66@gmail.com</a>
        </p>
      </div>
    </HomeLayout>
  );
}
