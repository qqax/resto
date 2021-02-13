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
            const duplicateIndex = state.items.findIndex(item => item.id === id);

            if (~duplicateIndex) {
                const itemInState = Object.assign({}, state.items[duplicateIndex]);
                ++itemInState.sum;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, duplicateIndex), itemInState, ...state.items.slice(duplicateIndex + 1)
                    ]
                };
            }

            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                sum: 1
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        }
        case "REMOVE_ITEM_FROM_CART": {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex), ...state.items.slice(itemIndex + 1)
                ]
            };
        }
        default:
            return state;
    }
};

export default reducer;