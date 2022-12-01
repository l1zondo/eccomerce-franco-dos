import React from "react";
import { Routes, Route } from "react-router-dom"
import ItemListContainer from "../Main/ItemListContainer";
import ItemDetailContainer from '../Main/ItemDetailContainer';
import Cart from "../Cart/Cart";


const Main = () => {
    return (
        <main>

            <Routes>

                <Route path='/' element={<ItemListContainer />} />

                <Route path='/products' element={<ItemListContainer />} />

                <Route path='/item/:id' element={<ItemDetailContainer />} />

                <Route path='/products/:category' element={<ItemListContainer />} />

                <Route path='/item/:id' element={<ItemDetailContainer />} />

                <Route path='/Cart' element={<Cart />} />
               

            </Routes>

        </main>

    )
}

export default Main