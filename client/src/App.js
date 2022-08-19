import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Market from './pages/Market';
import PostCreate from './pages/PostCreate';
import PostDetail from './pages/PostDetail';
import MyPage from './pages/MyPage';
import Signin from './pages/Signin'
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
// components
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/detail/:id" element={<PostDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;