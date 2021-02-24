import React, {useState} from 'react';
import axios from 'axios';
const ProductForm = () => {
    const [type, setType]= useState("");
    const [price, setPrice]=useState("");
    const [description, setDescription]= useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            type,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        setType("");
        setPrice("");
        setDescription("");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Type:</label>
                <input type="text"
                value= {type}
                onChange= {(e)=> setType(e.target.value)}
                />
            </p>
            <p>
                <label>Price:</label>
                <input type="text"
                value= {price}
                onChange= {(e)=> setPrice(e.target.value)}
                />
            </p>
            <p>
                <label>Description:</label>
                <input type="text"
                value= {description}
                onChange= {(e)=> setDescription(e.target.value)}
                />
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;