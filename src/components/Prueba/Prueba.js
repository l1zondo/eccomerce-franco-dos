import { useEffect } from 'react';

const Ejemplo = () => {
    //estado
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((resultado) => resultado.json())
            .then((res) => {
                console.log(res);
                //guardar en el estado
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <p>
        
            </p>
        </div>
    );
};

export default Ejemplo;