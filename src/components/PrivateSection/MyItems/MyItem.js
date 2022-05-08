import useUser from '../../../Hooks/useUser';

const MyItem = ({item}) => {
    const [userItems, setUserItems] = useUser()

    const {name, image, quantity, description, price, supplierName, _id} = item

    const handleDelete = (id) => {
        const proceed = window.confirm(`Are You Sure You Want To Delete ${name}?`)
        if(proceed){
            const url =`https://nameless-reef-88992.herokuapp.com/userProduct/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
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
            <div className="card mb-3 mx-auto border-0 shadow " style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <h5 className="card-title">{price}</h5>
                        <h5 className="card-title">Quantity:{quantity}kg</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">Supplied by- {supplierName}</small></p>
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