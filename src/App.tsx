import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import PostPage from '@/pages/PostPage';
import About from '@/pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
