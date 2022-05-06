import useUser from '../../../Hooks/useUser';

const MyItem = ({item}) => {
    const [userItems, setUserItems] = useUser()

    const {name, image, quantity, description, price, supplierName, _id} = item

    const handleDelete = (id) => {
        const proceed = window.confirm(`Are You Sure You Want To Delete ${name}?`)
        if(proceed){
            console.log(id);
            const url =`http://localhost:5000/userProduct/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    const remaining = userItems.filter(itemRemaining=>itemRemaining._id!== id);
                    setUserItems(remaining)
                }
            })
        }
    }


    return (
        <div>
            <div className='col-lg-12 col-md-12 col-sm-12 mt-3'>
            <div class="card mb-3 mx-auto border-0 shadow " style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{name}</h3>
                        <h5 class="card-title">{price}</h5>
                        <h5 class="card-title">Quantity:{quantity}kg</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">Supplied by- {supplierName}</small></p>
                        <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyItem;