// src/components/Layout.tsx

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.tsx';

const Layout = () => {
  const [scrollToAbout, setScrollToAbout] = useState<(() => void) | null>(null);
  const [scrollToContact, setScrollToContact] = useState<(() => void) | null>(null);

  const handleScrollToAbout = () => {
    if (scrollToAbout) {
      scrollToAbout();
    }
  };

  const handleScrollToContact = () => {
    if (scrollToContact) {
      scrollToContact();
    }
  };

  return (
    <div>
      <Header onScrollToAbout={handleScrollToAbout} onScrollToContact={handleScrollToContact} />
      <Outlet context={{ setScrollToAbout, setScrollToContact }} />
    </div>
  );
};

export default Layout;
