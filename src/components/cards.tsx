import React, { useState } from "react";
import "./cards.css";

function Cards() {
    const [isYearly, setIsYearly] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    interface PageviewOption {
        views: number;
        price: number;
    }

    const options: PageviewOption[] = [
        { views: 10000, price: 8 },
        { views: 50000, price: 12 },
        { views: 100000, price: 16 },
        { views: 500000, price: 24 },
        { views: 1000000, price: 36 },
    ];

    const calculatePrice = (price: number) => {
        return isYearly ? (price * 12 * 0.75).toFixed(2) : price.toFixed(2);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedIndex(Number(event.target.value));
    };

    const handleMouseUp = () => {
        const roundedIndex = Math.round(selectedIndex);
        setSelectedIndex(roundedIndex);
    };

    const toggleBilling = () => {
        setIsYearly(prev => !prev);
    };

    return (
        <div className="w-full flex justify-center items-center absolute">
            <div className="cards rounded-lg pb-6 mt-12 p-12">
                <div className="flex justify-between items-center pricing">
                    <h2 className="pageView price-transition pt-3 tracking-widest">
                        {options[selectedIndex].views / 1000}K PAGEVIEWS
                    </h2>
                    <div className="flex gap-x-2 items-center">
                        <h1 className="h1 font-bold text-4xl text-blue-950 price-transition">
                            ${calculatePrice(options[selectedIndex].price)}
                        </h1>
                        <h3 className="text-gray-400 font-semibold">/ month</h3>
                    </div>
                </div>

                {/* Slider section  */}
                <div>
                    <input
                        type="range"
                        id="slider"
                        value={selectedIndex}
                        onChange={handleChange}
                        onMouseUp={handleMouseUp}
                        min="0"
                        max={options.length - 1}
                        step="1"
                        className="customRange mt-10 w-full h-1.5 bg-gray-300 border-none"
                    />
                </div>

                {/* Yearly Toggle Button */}
                <div className="toggleSection flex mt-8 gap-4 justify-end pr-3">
                    <p className="toggleCont text-xs font-normal text-gray-500">Monthly Billing</p>
                    <div className={`toggle-container ${isYearly ? 'active' : ''}`} onClick={toggleBilling}>
                        <div className={`toggle-button ${isYearly ? 'active' : ''}`}></div>
                    </div>
                    <p className="toggleCont text-xs font-normal text-gray-500">
                        Yearly Billing{" "}
                        <span className="span1 ml-2 bg-orange-100 text-orange-500 font-semibold text-xs p-1 rounded-lg pl-2 pr-2"></span>
                    </p>
                </div>

                {/* Divider  */}
                <div className="h-0.5 w-full bg-neutral-200 mt-10 mb-5" />

                {/* Additional Information  */}
                <div className="flex pb-4 pt-4 addInfo">
                    <div className="infoContent w-full flex flex-col gap-y-1.5 justify-center items-start text-xs font-normal text-gray-500 p-2 pt-0 text-left">
                        <div className="flex items-center gap-3">
                            <div className="check"></div>
                            <p>Unlimited Websites</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="check"></div>
                            <p>100% data ownership</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="check"></div>
                            <p>Email reports</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button className="rounded-3xl font-medium text-gray-200 pl-10 pr-10 p-2 trial-btn text-sm">
                            Start my trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
