import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top of page when route changes
 * Implements smooth scroll behavior for better UX
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly when route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};

export default useScrollToTop;
