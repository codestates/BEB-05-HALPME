import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home, Market, MyPage, NotFound, PostCreate, PostDetail, Signin, Signup} from './pages'
import { Navbar, Footer } from './components'
import './assets/styles/App.css';

function App() {
  return (
    <div className="App stop-dragging">
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