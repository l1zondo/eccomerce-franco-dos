import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; //-> import por default
import { useParams } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'productos');

        const referencia = categoryName
            ? query(collectionProd, where('category', '==', categoryName))
            : collectionProd;

        getDocs(referencia)
            .then((res) => {
                //console.log(res.docs);
                //.data()
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                //console.log(products);
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <PropagateLoader style={{ marginTop: '100px' }} color="black" />
                {/* <h1>Cargando...</h1> */}
            </div>
        );
    }

    return (
        <main>
            <div className="item-list-container">
                <ItemList items={items} />
            </div>
        </main>
    );
};

export default ItemListContainer;