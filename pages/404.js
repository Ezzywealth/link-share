// pages/404.js
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <p className="text-blue-500 hover:underline">Go back to home</p>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
