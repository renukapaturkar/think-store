import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { CartContext } from "../context/cart-context";




export const UseProductDetails = (id) => {
    const [productDetail, setProductDetail] = useState([]);
    const {dispatch} = useContext(CartContext)

    const getProduct = async() => {
        dispatch({type: "SHOW_LOADER"})
        try{
            
            const {data, status} = await axios.get(`https://serene-lowlands-13656.herokuapp.com/products/${id}`);
            
                
                if(status === 200){
                   
                    setProductDetail(data.data)
                    dispatch({type: "SHOW_LOADER"})
                }else {
                    console.log("something went wrong!")
                }
           



        }catch(error){
            console.log("something went really wrong!")
            console.error(error)
        }

    }

    useEffect(()=> {
        getProduct();
    }, [])

    return productDetail;
}
