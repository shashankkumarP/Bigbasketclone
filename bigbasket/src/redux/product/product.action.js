import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, Update_Brand } from "./product.action.type"
import { getcart } from "../../pages/cart/Cart_action"

export const fetchData = (filter) => (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING })
    axios.get(`https://sore-pear-armadillo-shoe.cyclic.app/product?sort_by=${filter}`)
            .then((r) => { dispatch({ type: GET_PRODUCT_SUCCESS, payload: r.data }) })
            .catch(() => dispatch({ type: GET_PRODUCT_ERROR }));
   

}



export const addtoCart = (el,userid) => async(dispatch) => {
    console.log(userid,"userid");
    await axios.post(`https://sore-pear-armadillo-shoe.cyclic.app/cart/product/${userid}`,{
        
        product_id:el._id,
        Title:el.Title,
        Brand:el.Brand,
        Image_url:el.Image_url,
        Price:el.Price,
        Category:el.Category,
        op:el.op
    }).then((r)=>{
        console.log(r);

    }).catch((e)=>{
        console.log(e.message)
    })
    dispatch(getcart(userid))


}



export const updateQty = (count,id) => (dispatch) => {
    axios.patch(`https://sore-pear-armadillo-shoe.cyclic.app/cart/${id}`,count)
        .then((r) => {
            console.log(r.data)
            })
}
