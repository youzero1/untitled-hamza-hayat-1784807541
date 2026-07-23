import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center bg-stone-50 text-stone-600">
              Loading the blog…
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
