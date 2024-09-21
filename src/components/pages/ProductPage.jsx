import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocalData  } from '../../services/fetchLocalData ';
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductDetails from "../ui/ProductDetails";

const ProductPage = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null); 
    const [quantity, setQuantity] = useState("1");
    const dispatch = useDispatch(); 

    const cart = useSelector(state => state.cart);
    const isInCart = cart.products.some(item => item.id === product?.id);

    const getProduct = async () => {
        try {
            const productResults = await fetchLocalData ('data/products.json');
            setProduct(productResults[id]); 
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        getProduct(); 
    }, [id]);

    const handleCartAction = () => {
        if (isInCart) {
            dispatch(removeFromCart(product.id));
            toast.error("Removed from Cart!");
        } else {
            dispatch(addToCart({ ...product, quantity }));
            toast.success("Added to Cart!");
        }
    };

    if (!product?.title) return <h1>Loading Product...</h1>;

    return (
        product && 
        <div className='bg-white'>
            <ToastContainer />
            <img src="/images/ship.jpg" className='h-10 w-auto mx-auto' alt="Shipping" />
            <div className='min-w-[1000px] max-w-[1500px] m-auto p-4'>
                <div className='flex justify-around p-2'>
                    <div className='w-[20%] relative'>
                        <img src={product.image} alt={product.title} className='object-cover sticky top-0'/>
                    </div>
                    <div className='flex flex-col gap-1 w-[40%]'>
                        <div className="mb-3">
                            <ProductDetails product={product} rating={true}/>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 border-slate-300 col-span-2 rounded-lg bg-white w-[20%]'>
                        <div className='flex items-center justify-between'>
                            <p>Buy new</p>
                            <img src="/images/dot-icon.avif" alt="" width={20} height={20} />
                        </div>
                        <div className='flex gap-[1px] mb-5'>
                            <p className='pt-[6px]'>$</p>
                            <p className='font-bold text-[30px]'>{product.price}</p>
                            <p className='font-semibold pt-[6px]'>99</p>
                        </div>
                        <p className='text-[#565959] text-[14px]'>$91.31 Shipping & Import Fees Deposit to Iran</p>
                        <div className='text-base xl:text-lg text-green-700 mt-1 font-semibold'>In Stock</div>
                        <div className='text-base xl:text-lg mt-1'>
                            <select 
                                onChange={(e) => setQuantity(e.target.value)} 
                                className='rounded-[8px] focus:outline-none mt-1 shadow-sm shadow-slate-400 text-[13px] px-[6px] py-[4px] focus:border-[#008296] border-[#D5D9D9] bg-[#F0F2F2] hover:bg-[#E3E6E6] cursor-pointer border-[1px] w-full'>
                                {[...Array(7).keys()].map(i => (
                                    <option key={i} value={i + 1}>Quantity:{i + 1}</option>
                                ))}
                            </select>
                        </div>
                        <button 
                            onClick={handleCartAction} 
                            className='btn'>
                            {isInCart ? "Remove from Cart" : "Add to Cart"}
                        </button>
                        <div className='flex max-h-[160px] overflow-hidden flex-col gap-1.6 text-[12px] p-1.6'>
                            <div className='mt-2'>
                                <div className='flex justify-between gap-1 items-center'>
                                    <p className='self-start'>Ships from</p>
                                    <p>Amazon.com</p>
                                </div>
                                <div className='flex justify-between gap-10 items-center'>
                                    <p className='self-start'>Sold by</p>
                                    <p>Amazon.com</p>
                                </div>
                                <div className='flex justify-between gap-10 items-center'>
                                    <p className='self-start'>Returns</p>
                                    <p className='self-end text-[#007185] hover:text-red-600 cursor-pointer'>
                                        Eligible for Return, Refund or Replacement within 30 days of receipt
                                    </p>
                                </div>
                                <div className='flex justify-between gap-10 items-center'>
                                    <p className='self-start'>Payments</p>
                                    <p className='pp-end text-[#007185] hover:text-red-600 cursor-pointer'>Secure transaction</p>
                                </div>
                                <div className='flex justify-between gap-10 items-center'>
                                    <p className='self-start'>Support</p>
                                    <p className='pp-end text-[#007185] hover:text-red-600 cursor-pointer'>Product support included</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;