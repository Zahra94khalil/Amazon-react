import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/cartSlice";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products || []);
  const itemNumber = useSelector((state) => state.cart.productNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  const dispatch = useDispatch();

  const handleDeselectAll = () => {
    products.forEach((product) => {
      dispatch(removeFromCart(product.id));
    });
  };

  return (
    <div className='p-[30px] bg-amazon-background'>
      <div className='flex gap-3'>
        {/* products */}
        <div className='bg-white rounded p-[40px] shadow-sm shadow-slate-400'>
          <header className='flex flex-col items-start p-1 gap-2'>
            <p>Shopping cart</p>
            <button
              className='text-[#007185] hover:text-red-600'
              onClick={handleDeselectAll}
            >
              Deselect All Items
            </button>
          </header>
          <hr className='border-slate-300 mt-1 h-[3px]' />
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>
                <div className='py-4 px-[20px] flex flex-col items-start gap-2'>
                  <div className='w-full'>
                    <div className='flex gap-5'>
                      <div>
                      <Link to={`/product/${product.id}`}>
                        <img className='p-4 m-auto' width={210} height={210} src={product.image} alt='' />
                      </Link>
                      </div>
                    
                    <div>
                      <p className='font-medium text-black mt-2'>
                        {product.description}
                      </p>
                      <p className='text-[#007600] py-1 text-[17px]'>
                        In Stock
                      </p>
                      <div>
                        <img src='/images/prime.avif' alt='' />
                        <div className='flex py-1 text-[14px] gap-1'>
                          <input type='checkbox' />
                          <p>This will be a gift</p>
                          <a
                            href=''
                            className='text-[#007185] hover:text-red-600'
                          >
                            Learn more
                          </a>
                        </div>
                        <div className='text-[14px]'>
                          <p>
                            <span className='font-bold text-[16px]'>
                              Style Name:
                            </span>{" "}
                            0.5 litre work container
                          </p>
                          <p>
                            <span className='font-bold text-[16px]'>
                              Color Name:
                            </span>{" "}
                            white
                          </p>
                        </div>
                        <div>
                          <select className='rounded-[8px] focus:outline-none mt-1 shadow-sm shadow-slate-400 text-[13px] px-[6px] py-[4px] focus:border-[#008296] border-[#D5D9D9] bg-[#F0F2F2] hover:bg-[#E3E6E6] cursor-pointer border-[1px]'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                          </select>
                          <span className='mx-2 max-w-[52px] text-slate-300'>
                            |
                          </span>
                          <button
                            className='text-[#007185] hover:text-red-600'
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Delete
                          </button>
                          <span className='mx-2 max-w-[52px] text-slate-300'>
                            |
                          </span>
                          <button className='text-[#007185] hover:text-red-600'>
                            Save for later
                          </button>
                          <span className='mx-2 max-w-[52px] text-slate-300'>
                            |
                          </span>
                          <button className='text-[#007185] hover:text-red-600'>
                            See more like this
                          </button>
                          <span className='mx-2 max-w-[52px] text-slate-300'>
                            |
                          </span>
                          <button className='text-[#007185] hover:text-red-600'>
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-1 justify-end'>
                      <p className='font-bold text-lg'>${product.price}</p>
                    </div>
                  </div>
                  </div>
                  <hr className='border-slate-300 mt-4 h-[3px]' />
                  <div className='w-full'>
                    <p className='text-lg text-right font-semibold'>
                      Subtotal({itemNumber} items): ${subtotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='m-4 text-gray-500'>Your cart is empty.
             <Link to={'/'}>
             <p className='text-cyan-600 hover:underline'>Back to Shop</p>
             </Link>
            </div>
          )}
        </div>
        {/* checkout */}
        <div className='bg-white rounded self-start p-[20px] shadow-sm w-[275px]  shadow-slate-40'>
          <div className='flex flex-col'>
           <p>Subtotal <span className='font-semibold text-yellow-900'>({itemNumber} items):{" "}</span></p>
           <p className='font-bold text-xl'> <span className='font-semibold'>${subtotal.toFixed(2)}</span></p>
          </div>
          <div className='flex py-1 text-[14px] gap-1'>
            <input type="checkbox" />
            <p>This will be a gift <a className='class="text-[#007185] hover:text-red-600"' href="#"></a></p>
          </div>
          <button className='btn'>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
