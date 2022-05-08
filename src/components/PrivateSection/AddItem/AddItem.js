import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useItems from '../../../Hooks/useItems';
import useUser from '../../../Hooks/useUser';
import 'react-toastify/dist/ReactToastify.css';


const AddItem = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useItems([])
    const [userItems, setUserItems] = useUser()
    //console.log(user);
    
    const handelSubmit = (e) => {
        e.preventDefault()
        const supplierName = e.target.supplierName.value
        const email = e.target.email.value 
        const name = e.target.productName.value 
        const price = e.target.price.value 
        const quantity = e.target.quantity.value 
        const description = e.target.description.value 
        const image = e.target.productPic.value
        
        const newProduct = {supplierName, email, name, price, quantity, description, image}
        //console.log(newProduct);

        const url = 'https://nameless-reef-88992.herokuapp.com/product'
        fetch(url, {
            method: 'POST',
            headers: {
                'authoraization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
            })
            .then(res => res.json())
            .then(data => {
            setItems(data)    
            console.log('Success:', data);
            e.target.reset()
        })

        const url2 = 'https://nameless-reef-88992.herokuapp.com/login'
        fetch(url2, {
            method: 'POST',
            headers: {
                'authoraization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
            })
            .then(res => res.json())
            .then(data => {
            setItems(data)    
            console.log('Success:', data);
            e.target.reset()
        })


        const url3 = 'https://nameless-reef-88992.herokuapp.com/userProduct'
        fetch(url3, {
            method: 'POST',
            headers: {
                'authoraization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
            })
            .then(res => res.json())
            .then(data => {
            setUserItems(data)        
            toast('Product added')
            //console.log('Success:', data);
            e.target.reset()
        })
    }
    return (
        <div className='my-5'>
            <form onSubmit={handelSubmit} className='w-50 h-auto mx-auto shadow p-5'>
                <h1 className='text-center mb-5'>Add Product</h1>
            <div className="mb-3">
                <input name='supplierName' value={user?.displayName} disabled type="text" className="input form-control mb-4" placeholder='Name' required/>
            </div>
            <div className="mb-3">
                <input name='email' value={user?.email} readOnly type="email" className="input form-control mb-4" placeholder='Email' required/>
            </div>
            <div className="mb-3">
                <input name='productName' type='text'  className="input form-control mb-4" id="exampleInputEmail1" placeholder='Product Name' aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <input name='price' type="text" className="input form-control mb-4" placeholder='Price' id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <input  name='quantity' type="number" className="input form-control mb-4" placeholder='Quantity' id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <textarea  name='description' type="text" className="input form-control mb-4" placeholder='Description' id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <input  name='productPic' type="text" className="input form-control mb-4" placeholder='Product photo url' id="exampleInputPassword1"/>
            </div>

            <p className='text-danger text-center'></p>

            <button type="submit" className="w-100 btn btn-primary py-2">Add Item</button>
                
            </form>
        </div>
    );
};

export default AddItem;