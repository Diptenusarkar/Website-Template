import React from "react";
import { useLoaderData } from "react-router";
import RoundedPrice from "../../constants/roundedPrice";
import GradeIcon from "@mui/icons-material/Grade";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToCart } from "../../redux/amazonSlice";
import { useDispatch } from "react-redux";

const Product = () => {
    const data = useLoaderData();
    const productData = data.data;
    // console.log(productData);
    const dispatch = useDispatch();
    
    return (
        <div className="allProduct max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 px-4">
            {productData.map((item) => (
                <div
                    key={item.id}
                    className="Cart bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
                >
                    <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
                        {item.category}
                    </span>
                    {/* ========== Product Image Start here ============== */}
                    <div className="w-full h-auto flex items-center justify-center relative group">
                        <img
                            className="w-52 h-64 object-contain"
                            src={item.image}
                            alt="Product Image"
                        />
                        {/* ================== Product mini drop down Start here ============ */}
                        <ul className="absolute w-full h-36 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2">
                            <li className="productLi">Compare<span><ApiIcon /></span></li>
                            <li className="productLi">Add to Cart<span><ShoppingCartIcon /></span></li>
                            <li className="productLi">View Details{" "}<span><ArrowCircleRightIcon /></span></li>
                            <li className="productLi">Add to Wish List{" "}<span><FavoriteIcon /></span></li>
                        </ul>
                        {/* ================== Product mini drop down End here ============== */}
                    </div>
                    {/* ========== Product Image End here ================ */} 
                    {/* ========== Product Info Start here =============== */}
                    <div className="px-4 bg-white flex flex-col gap-1 z-10">
                        <div className="flex items-center justify-between">
                            <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                                {item.title.substring(0, 20)}
                            </h2>
                            {/* Price in dollar */}
                            <p className="text-sm text-gray-600 font-semibold">
                                ${item.price}
                            </p>

                            {/* Price in INR */}
                            {/* <RoundedPrice price={item.price} /> */}
                        </div>
                        <div>
                            <p className="text-sm">
                                {item.description.substring(0, 100)}...
                            </p>
                        </div>
                        <div className="text-amazon_yellow flex">
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            {/* <GradeOutlinedIcon /> */}
                        </div>
                        <button onClick={()=> dispatch(addToCart({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            category: item.category,
                            image: item.image,
                            quantity: 1,
                            
                        }))} className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">
                            Add to Cart
                        </button>
                    </div>
                    {/* ========== Product Info End here ================= */}
                    {/* ============ Product Image Start here ======== */}

                    {/* ============ Product drop-down Start here ==== */}
                    {/* ============ Product drop-down End here ====== */}

                    {/* ============ Product Image End here ========== */}
                    {/* ============ Product Info Start here ========= */}
                    {/* ============ Product Info End here =========== */}
                </div>
            ))}
        </div>
    );
};

export default Product;
