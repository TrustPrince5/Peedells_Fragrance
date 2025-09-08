import React, { useContext} from 'react'
import Container from '../component/shared/Container';
import { ProductContext } from '../context/ProductContext';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import { useForm} from 'react-hook-form';
import { initiatePayment } from '../services/api/order';


function Checkout() {
    const { calcTotal, cartItems} = useContext(ProductContext)
    const [ state, dispatch ] = useContext(AuthContext)
    const isAuthenticated = state?.accessToken !== null;
    const {register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm({
        mode: "onChange"
    });

    const initiatePaymentHandler = async (payData) => {
    try {
        const response = await initiatePayment(payData);
        console.log(response);
        if (response) { 
            console.log("Payment initiated successfully");
        }
    } catch (error) {
        console.error(error);
    }
}

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <Container>
            <div className='space-y-3'>
                <h1>Checkout</h1>
                <p>Please review your order and complete your purchase.</p>
        </div>

        <div className='grid grid-cols-1 mt-5 md:grid-cols-3 justify-center gap-5'>
            <div className='col-span-2'>
                <div className='table overflow-x-auto w-full'>
                    <table className='capitalize'>
                        <thead>
                            <tr className='border-b border-gray-400'>
                                <th className='py-3 px-4 text-start'>s/n</th>
                                <th className='py-3 px-4 text-start'>Product Name</th>
                                <th className='py-3 px-4 text-start'>Price</th>
                                <th className='py-3 px-4 text-start'>Quantity</th>
                                <th className='py-3 px-4 text-start'>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems?.products.map((items, index) => (
                                <tr key={index} className='border-b border-gray-400'>
                                    <td className='py-3 px-6 text-start'>{items.id}</td>
                                    <td className='py-3 px-6 text-start'>{items?.product?.name}</td>
                                    <td className='py-3 px-6 text-start'>#{items?.product?.price.toFixed(2)}</td>
                                    <td className='py-3 px-6 text-start'>{items?.quantity}</td>
                                    <td className='py-3 px-6 text-start'>#{items?.amount.toFixed(2)}</td>
                                    
                                </tr>
                            ))}
                            {/* <tr className='border-b border-gray-400'>
                                <td className='py-3 px-6 text-start'>2</td>
                                <td className='py-3 px-6 text-start'>Wrist watch</td>
                                <td className='py-3 px-6 text-start'>#56.99</td>
                                <td className='py-3 px-6 text-start'>5</td>
                                <td className='py-3 px-6 text-start'>#5687.099</td>
                                
                            </tr>
                            <tr className='border-b border-gray-400'>
                                <td className='py-3 px-6 text-start'>3</td>
                                <td className='py-3 px-6 text-start'>Wrist watch</td>
                                <td className='py-3 px-6 text-start'>#56.99</td>
                                <td className='py-3 px-6 text-start'>8</td>
                                <td className='py-3 px-6 text-start'>#5687.099</td>
                                
                            </tr> */}
                        </tbody>
                        <tbody>
                            <tr className='border-b border-gray-400'>
                                <td className='py-3 px-6 text-end' colSpan={4}>Total Amount: </td>
                                <td className='py-3 px-6 text-start' colSpan={5}>#{calcTotal().toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-white shadow-md rounded-md'>
                <form action="" className='p-3' onSubmit={handleSubmit(initiatePaymentHandler)}>
                    <div className='mb-3'>
                        <input type="text" placeholder='Full Name' name="" className='border outline-none w-full border-gray-300 rounded-md p-2' id="" />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Email Address' name="" className='border outline-none w-full border-gray-300 rounded-md p-2' id="" />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Delivery Address' name="" className='border outline-none w-full border-gray-300 rounded-md p-2' id="" />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Phone Number' name="" className='border outline-none w-full border-gray-300 rounded-md p-2' id="" />
                    </div>
                    <div className='mb-3'>
                        <input type="hidden" placeholder='Phone Number' value={56789} name="" className='border outline-none w-full border-gray-300 rounded-md p-2' id="" />
                    </div>
                    <div className='mb-3'>
                        <p className='block p-2 rounded-md text-lg font-semibold border border-gray-300'>{calcTotal().toFixed(2)}</p>
                    </div>
                    <div className='mb-3'>
                        <button type="submit" className="bg-[#0B0500] hover:bg-[#D8F1A0] hover:text-[#0B0500] text-[#D8F1A0] py-2 md:py-4 px-3 md:px-12 w-full">
                            Proceed to Make Payment
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </Container>
  )
}

export default Checkout;
