const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: "MENU_REQUESTED",
    };
};

const menuError = (err = "Need ERROR description!!!") => {
    console.log(err);
    return {
        type: "MENU_ERROR",
    };
};

const addedToCart = (id) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: id
    };
};

const deleteFromCart = (id) => {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: id
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart
};