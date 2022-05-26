import axios from 'axios'
import React, { useEffect, useState } from 'react';

import { handleIndividualData } from "../handleIndividualData"

const ShoppingCart = () => {
    const [bookIds, setBookIds] = useState([])
 
    const fetchBookLists = () => {
        const chosenBooks = 
            axios
            .get("/api/shopping_cart")
            .then(response => {
                const listIds = response.data.map(res => res.product_id);
                setBookIds(listIds)
            })
            .catch(error => console.log(error))
    
        const fetches = bookIds.map((bookId) =>
            axios
                .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
                .then((res) => {
                    const data = handleIndividualData(res.data);
                    return data;
                })
                .catch((error) => console.log(error))
        )
        // await Promise.fetchAll(([chosenBooks, fetches]).then(res => {
        //     console.log(res);
        // }))
    }

    useEffect(() => {
        fetchBookLists();
    }, [])

    return (
        <div>
            <h1>Shopping Cart</h1>
        </div>
    )
}

export default ShoppingCart