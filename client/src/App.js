import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Market from './pages/Market';
import Write from './pages/Write';
import Detail from './pages/Detail';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
// components
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="write" element={<Write />} />
          <Route path="/detail" element={<Detail />} />
            <Route path=":id" />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;