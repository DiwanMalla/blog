import Nav from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="content min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
