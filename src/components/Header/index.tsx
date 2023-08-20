import { ReactComponent as Cart } from 'assets/svg/cart.svg';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import React from 'react';

export default function Header() {
    return (
        <>
            <div className="h-[70px] w-full bg-[#15181D] flex justify-between items-center px-6">
                <div className="flex justify-between items-center w-[19%]">
                    <div className="h-10 w-10 rounded-md bg-[#272A31] flex items-center justify-center relative">
                        <Cart />
                        <div className="absolute w-[20px] h-[20px] bg-red-500 rounded-md top-6 left-5 text-white">
                            <p className="ml-[6px]">۵</p>
                        </div>
                    </div>
                    <div className="h-10 w-[120px] bg-[#272A31] rounded-md p-5 text-[#ABABAB] flex items-center">
                        ثبت نام / ورود
                    </div>
                    <div className="text-[#ABABAB]">سلام مهرناز!</div>
                </div>
                <div className="">
                    <Logo />
                </div>
            </div>
        </>
    );
}
