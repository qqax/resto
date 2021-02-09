const initialState = {
    menu: [],
    loading: true,
    error: false
};

const reducer = (state = initialState, action) => {
    console.log(state);

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

        default:
            return state;
    }
};

export default reducer;