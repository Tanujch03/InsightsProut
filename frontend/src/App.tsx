import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Blog } from './pages/Blog';
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast'; // Import Toaster

function App() {

  return (
    <>
      {/* Add Toaster to the top level of the app */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/' element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
