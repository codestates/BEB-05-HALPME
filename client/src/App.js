import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Home, Market, MyPage, NotFound, PostCreate, PostDetail, Signin, Signup } from './pages'
import { Navbar } from './components'
import './assets/styles/App.css';

function App() {
  let account = useSelector((state) => state.account)
  return (
    <div className="App stop-dragging">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home account={account} />} />
          <Route path="/market" element={<Market account={account}  />} />
          <Route path="/create" element={<PostCreate account={account}  />} />
          <Route path="/detail/:id" element={<PostDetail account={account}  />} />
          <Route path="/mypage" element={<MyPage account={account}  />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;