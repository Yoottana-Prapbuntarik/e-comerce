
const initState = {
    addedItems:[],
    allCost:0,
    dataProduct:[],

}
const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Item':      
            return {
                ...state,
                addedItems: [...state.addedItems, action.payload],
            }     
        case 'TotalCost':      
            return {
                ...state,
                allCost: state.allCost += action.payload
            }
        case 'Get-Api':
            return{
                ...state,
                dataProduct:[...state.dataProduct,action.payload]
            }     
        default:
            return state
    }
};
export default CartReducer;