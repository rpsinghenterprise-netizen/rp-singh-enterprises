// layout/MainLayout.jsx
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import FloatingChatButton from "../components/ui/FloatingChatButton";


const MainLayout = ({ children }) => {
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
