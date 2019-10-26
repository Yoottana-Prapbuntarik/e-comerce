const initState = {
    addedItems:[],
    allCost:0,
    dataProduct:[],
    itemsSearch:[],
    UserSearch:""

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
        case 'Searching':
            return{
                ...state,
                itemsSearch:[...state.itemsSearch,action.payload]
            }
        case 'InputSearch':
            return{
                ...state,
                UserSearch:state.UserSearch = action.payload
            }
        default:
            return state
    }
};
export default CartReducer;