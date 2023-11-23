export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const deleteCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}

export const incrementProduct = (productid, action) => {

if(action === "inc"){
    return{
        type:"INCITEM",
        payload: productid
    }
}
if(action === "dec"){
    return{
        type:"DEC_ITEM",
        payload: productid
    }
}

    
}
