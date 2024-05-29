import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import { TestProvider } from './components/TestContext'; 
import DetailPost from './components/DetailPost';
import Posts from './components/Posts';

function App() {
  return (
    <TestProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail" element={<DetailPost />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </TestProvider>
  );
}

export default App;
