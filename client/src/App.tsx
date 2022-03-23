import React from 'react';
import {Products} from "./features/products/Products";
import {SingleProduct} from "./features/products/SingleProduct";
import './App.css';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/products"/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<SingleProduct />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
