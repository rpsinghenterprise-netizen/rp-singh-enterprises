// layout/MainLayout.jsx
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import FloatingChatButton from "../components/ui/FloatingChatButton";
import useScrollToTop from "../hooks/useScrollToTop";

const MainLayout = ({ children }) => {
  // Scroll to top on route change
  useScrollToTop();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingChatButton />
    </>
  );
};

export default MainLayout;
