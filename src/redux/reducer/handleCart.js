const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch(action.type){
        case "ADDITEM":
        const exist = state.find((x) => x.id === product.id);
        if(exist){
            return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1}: x)
        }
        else {
            const product = action.payload;

            return [
                ...state,
                {
                    ...product,
                    qty: 1,
                }
            ]
        }
     

        case "DELITEM":
        return state.filter((x) => x.id !== product)
            
        case "INCITEM":
        return state.map((x) => x.id === product ? {...x, qty: x.qty+1} : x );

        case "DEC_ITEM":
        return state.map((x) => x.id === product ? {...x, qty: x.qty-1} : x );





        default:
        return state;
        
    }
}

export default handleCart;