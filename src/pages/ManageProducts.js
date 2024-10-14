import {useState ,useEffect} from "react";

const ManageProducts = ()=>
{
    const [products, setProducts] = useState([]);
    const [newItem,setNewItem] = useState({title:" ",price:" "})

    useEffect(()=>{
       fetchproduct();
    }, []);

    const fetchproduct = async ()=>{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
    }

    const handleAddItem = async (e)=>{
        e.preventDefault();
        const response = await fetch("https://dummyjson.com/products/add",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newItem)
        });
        const data=await response.json();
        setProducts([...products, data]);
    }

    const handleDeleteItem = async (id) => {
        await fetch(`https://dummyjson.com/products/${id}`, { method: "DELETE" });
        setProducts(products.filter((product) => product.id !== id));
      };
    
    return(
        <>
        <h1>Manage Product</h1>
        <form onSubmit={handleAddItem}>
            
            <input type="text" placeholder="Title" value={newItem.title} 
                onChange={
                    (e)=>setNewItem({...newItem, title:e.target.value})
                    } />
            
            <input type="number" placeholder="Price" value={newItem.price} 
                onChange={
                    (e)=>setNewItem({...newItem, price:e.target.value})
                    } />

            <button type="submit">Add Product</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map(index=>(
                    <tr key={index.id}>
                        <td>{index.id}</td>
                        <td>{index.title}</td>
                        <td>{index.price}</td>
                        <td>
                            <button onClick={
                                ()=>handleDeleteItem(index.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )
}

export default ManageProducts;