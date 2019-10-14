const initState = {
    addedItems:[],
    allCost:0

}
const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Item':      
            return {
                ...state,
                addedItems: [...state.addedItems, action.payload],
            }     
        case 'Total':      
            return {
                ...state,
                allCost: state.allCost += action.payload
            }     
        default:
            return state
    }
};
export default CartReducer;