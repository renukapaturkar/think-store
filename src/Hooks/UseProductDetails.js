import {useEffect, useState} from 'react';
import axios from 'axios';



export const UseProductDetails = (id) => {
    const [productDetail, setProductDetail] = useState([]);

    const getProduct = async() => {
        try{
            const {data, status} = await axios.get(`https://serene-lowlands-13656.herokuapp.com/products/${id}`);
            
                console.log(data.data.image_url)
                // setProductDetail({productData})
                if(status === 200){
                    setProductDetail(data.data)
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
