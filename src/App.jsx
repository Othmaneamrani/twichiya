import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import { TestProvider } from './components/TestContext'; 
import DetailPost from './components/DetailPost';
import Posts from './components/Posts';
import {PostProvider} from "./components/PostContext.jsx";
import Posts2 from "./components/Posts2.jsx";

function App() {
  return (
    <TestProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />

            <Route path="/detail" element={<PostProvider><DetailPost/></PostProvider>} />
          <Route path="/posts" element={<PostProvider><Posts /></PostProvider>} />
          <Route path="/posts2" element={<PostProvider><Posts2 /></PostProvider>} />

        </Routes>
      </BrowserRouter>
    </TestProvider>
  );
}

export default App;
