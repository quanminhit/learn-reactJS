// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Board from './Component/CoCaNgua/Board';
// import NewPage from './Component/CoCaNgua/NewPage';
// import SnakeGame from './Component/CoCaNgua/SnakeGame';
// import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import TodoFeature from './Features/Todo';
import AlbumFeature from './Features/Album';
import NotFound from './Component/NotFound';
import productApi from './Api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      Header
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Album</Link>
      </p>
      <Routes>
        <Route path="/todos/*" element={<TodoFeature />} />
        <Route path="/albums/*" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      Footer
    </div>

    // <Router>
    //   <Routes>
    //     <Route path='/' element={<SnakeGame />} />
    //     <Route path='/NewPage' element={<NewPage />} />
    //   </Routes>
    // </Router >
  );
}

export default App;
