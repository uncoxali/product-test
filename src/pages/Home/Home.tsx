import { Box } from '@mui/material';
import Footer from 'components/Footer';
import { useAppDispatch } from 'hook/hooks';
import Slider from 'pages/Product/slider';
import React from 'react';

export default function Home() {
    const dispatch = useAppDispatch();
    return (
        <Box className="bg-[#06070C] h-auto px-[200px]">
            <div className="w-full flex justify-between py-5">
                <p className="text-[#7F7F7F] text-sm">مشاهده همه</p>
                <p className="text-white text-xl">محبوب‌ترین محصولات</p>
            </div>
            <div className="flex justify-center">
                <Slider />
            </div>
            <div className=" flex justify-center">
                <Footer />
            </div>
        </Box>
    );
}
