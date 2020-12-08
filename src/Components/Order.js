import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import Loader from './Loader'
import { useAxiosGet } from '../Hooks/HttpRequest'

const Order = () => {
    const url = 'https://indapi.kumba.io/webdev/assignment';

    let order = useAxiosGet(url)

    let content = null;

    if(order.loading){
        content = <div>
            <Loader/>
        </div>
    }

    if(order.data){
        let items = order.data.items

        // mapping through the items and returning the result
        let name = items.map((el, index) => 
            <div className='summary'>
                <div>
                     <p>{index + 1}</p>
                </div>
                <div>
                    <p>{el.name}</p>
                </div>
                <div className='product-img'> <img src={`/assets/burger-${index + 1}.jpg`} alt=""/></div>
                <div>
                    <p>{el.category}</p>
                </div>
                <div>
                    <p>{el.price}</p>
                </div>
                <div>
                    <p>{el.currency}</p>
                </div>
                <div>
                    {el.tax_pct}
                </div>
                <div>
                    {el.quantity}
                </div>
                
            </div>
        )

        
        // Mapping through the price and calculating the total price
        let total = items.map(el => el.price * el.quantity)
        let totalPrice = total.reduce((prev, curr) => prev + curr);
        // Mapping through the quantity and calculating the total quantity
        let quantity = items.map(el => el.quantity) 
        let totalQuantity = quantity.reduce((prev, curr) => prev + curr)
        // Mapping through the price and calculating the total price
        let tax = items.map(el => el.tax_pct)
        let totalTax = tax.reduce((prev , curr) => prev + curr)
        
        
        let restaurant = order.data.restaurant;
        
        let customer = order.data.user
        let likes = customer.likes.join(', ')
        let dislikes = customer.dislikes.join(', ')
        
        content = <div className='order-container'>

            <div className='customer-wrapper'>
                 <div className="customer">
                    <h5>Customer Details</h5>

                    <div className="details">
                        <div><p>Name :</p> {customer.name}</div>
                        <div><p>Address :</p> {customer.address}</div>
                        <div><p>Phone :</p> {customer.phone}</div>
                        <div><p>Likes :</p> {likes}</div>
                        <div><p>Dislikes :</p> {dislikes}</div>
                    </div>
                </div>
                <img src="/assets/burger-1.jpg" alt=""/>
            </div>

            <div className="items">
                <h5>Items of the order</h5>
                    <div>
                        <div className="summary head">
                            <div>Item No</div>
                            <div>Product Name</div>
                            <div className='hide'>Product Image</div>
                            <div>Category</div>
                            <div>price</div>
                            <div>Currency</div>
                            <div>Tax</div>
                            <div>Quantity</div>
                        </div>
                        <p> {name}</p>
                        <div className="summary total">
                            <div>Total</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div>{totalPrice}</div>
                            <div></div>
                            <div>%{totalTax}</div>
                            <div>{totalQuantity}</div>
                        </div>
                    </div>
            </div>

            <div className="restaurant">
                <h5>Restaurant Details</h5>
                
                <div className="details">
                    <p>Name: {restaurant.name}</p>
                    <p>Street: {restaurant.street}</p>
                    <p>City: {restaurant.city}</p>
                    <p>State: {restaurant.state}</p>
                    <p>Zip-Code {restaurant.zipcode}</p>
                </div>
            </div>
            
            <Link to='/'   onClick={() => <Profile/>}>
                    <div className='button'>
                        <button>Back</button>
                    </div>
                </Link>
        </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Order
