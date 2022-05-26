import axios from 'axios'
import React, { useEffect } from 'react'

const ShoppingCart = () => {
    const [bookLists, setBookList] = useState([])
    const fetchBookLists = () => {
        axios
            .get("/api/shopping_cart")
            .then(response => {
                console.log(response.data);
                setBookList(response.data)
            })
            .catch(error => console.log(error))
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