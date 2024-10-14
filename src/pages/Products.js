import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
const Products=()=>
{
    const [product,setProducts]=useState([]);
    const [error,setError]=useState(null);
    const navigation=useNavigate();
    useEffect(()=>
    {
        const fetching=async()=>
        {
            try
            {
                const response=await fetch('https://dummyjson.com/products');
                const data=await response.json();
                setProducts(data.products);
            }
            catch(error)
            {
                setError("Failed to fetch");
            }
        };
        fetching();
    },[]);
    if (error) return <p> {error} </p>;

    return(
        <>
        <h1> Product List </h1>
        <button onClick={() => navigation("/ManageProducts")}>
                Go to Manage Products
            </button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {product.map((index)=>(
                    <tr key={index.id}>
                        <td>{index.id}</td>
                        <td>{index.title}</td>
                        <td>{index.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Products;