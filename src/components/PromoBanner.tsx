import React from 'react';

const Promobanner:React.FC = () =>{
    return(
        <section className='bg-black text-white py-2'>
            <div className='flex justify-between items-center px-8'>
                <div className='text-sm items-center w-full'>
                    <p className='text-sm text-center'>
                    Summer Sale - OFF 50%!Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className='font-semibold'>     Shop Now</span>
                    </p>
                </div>
                <div>
                    <select className='bg-black text-white border-none text-sm cursor-pointer'>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="es">Español</option>
                    </select>
                </div>
            </div>
        </section>
    )
}
export default Promobanner;