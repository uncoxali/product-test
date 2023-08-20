import { ReactComponent as Cart } from 'assets/svg/cart.svg';
import { ReactComponent as Clock } from 'assets/svg/clock.svg';
import { ReactComponent as Fev } from 'assets/svg/fev.svg';
import React from 'react';

type T = {
    img: string;
    id: number;
};
interface Props {
    item: T;
}
export default function ProductItem({ item }: Props) {
    return (
        <div className="!w-[186px] !h-[300px] bg-white p-2 rounded-md keen-slider__slide">
            <div className="flex justify-between">
                <div className="flex gap-2 w-full">
                    <div className="w-[30px] h-[30px] rounded-[5px] border border-neutral-400">
                        <Fev />
                    </div>
                    <div className="w-[30px] h-[30px] rounded-[5px] border border-neutral-400">
                        <Cart />
                    </div>
                </div>
                <div className="w-full">
                    <div className="text-right text-red-500 text-[11px] font-extrabold">
                        پیشنهاد ویـــــژه
                    </div>
                    <div className=" text-red-500 text-[11px] font-bold tracking-tight flex justify-end">
                        ۲۳ : ۱۲ : ۰۵
                        <Clock className="ml-1 mt-0.5" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-4">
                <div className="w-[130px] h-[149px] bg-green-300">
                    <img src={item.img} alt="" />
                </div>
            </div>
            <div className=" bg-white rounded-bl-[5px] rounded-br-[5px] flex justify-center">
                <div className="w-[54px] h-1.5 relative">
                    <div className="w-1.5 h-1.5 left-0 top-0 absolute bg-orange-300 rounded-full" />
                    <div className="w-1.5 h-1.5 left-[12px] top-0 absolute bg-orange-300 rounded-full" />
                    <div className="w-1.5 h-1.5 left-[24px] top-0 absolute bg-orange-400 rounded-full" />
                    <div className="w-1.5 h-1.5 left-[36px] top-0 absolute opacity-60 bg-orange-300 rounded-full" />
                    <div className="w-1.5 h-1.5 left-[48px] top-0 absolute bg-yellow-700 rounded-full" />
                </div>
            </div>
            <div className="mt-3">
                <div className="w-[166px] text-right text-zinc-600 text-xs font-normal">
                    عنوان محصول
                </div>
                <div className="flex justify-between mt-2">
                    <div className="w-[166px] text-zinc-600 text-xs font-normal">قیمت محصول</div>
                    <div className="flex justify-center items-center w-10 h-6 bg-red-500 rounded-lg text-white">
                        ٪۵۰
                    </div>
                </div>
            </div>
        </div>
    );
}
