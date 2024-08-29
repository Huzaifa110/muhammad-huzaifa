import React from 'react';

const FooterSection = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-4 text-center text-sm sm:text-base">
      <p>Copyright &copy; {new Date().getFullYear()}, Muhammad Huzaifa</p>
    </footer>
  );
};

export default FooterSection;
