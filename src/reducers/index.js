const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case "MENU_REQUESTED":
            return {
                // menu: state.menu,
                ...state,
                loading: true
            };
        case "MENU_ERROR":
            return {
                ...state,
                error: true
            };
        case "ADD_ITEM_TO_CART": {
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            };
            console.log(item);
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        }
        default:
            return state;
    }
};

export default reducer;