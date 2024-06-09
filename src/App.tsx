import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/allblogs" element={<AllBlogs />}></Route>
          <Route path="/bloginfo/:id" element={<BlogInfo />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/*" element={<Nopage />}></Route>
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
