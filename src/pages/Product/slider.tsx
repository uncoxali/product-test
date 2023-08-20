import 'keen-slider/keen-slider.min.css';

import { ReactComponent as ArrowRight } from 'assets/svg/arrow.right.svg';
import { ReactComponent as ArrowLeft } from 'assets/svg/arrow-left.svg';
import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';

import { productData } from './data';
import ProductItem from './productItem';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
        slides: { perView: 4, spacing: 10 },
    });

    return (
        <>
            <div className="navigation-wrapper pb-20 w-[928px] ">
                <div className="flex justify-center">
                    <div ref={sliderRef} className="keen-slider ">
                        {productData.map((item, idx) => (
                            <ProductItem key={idx} item={item} />
                        ))}
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <div className="relative">
                        <div
                            className={`cursor-pointer w-10 h-10 origin-top-left bg-zinc-800 rounded-[5px]  absolute -left-16 -top-[170px]`}
                        >
                            <ArrowLeft
                                className="mt-2 ml-1.5"
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef?.current?.prev()
                                }
                            />
                        </div>

                        <div
                            className={` cursor-pointer absolute -right-16 flex justify-center  w-10 h-10 origin-top-left bg-zinc-800 rounded-[5px] -top-[170px]`}
                        >
                            <ArrowRight
                                className="mt-2"
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef?.current?.next()
                                }
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
