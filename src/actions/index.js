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


export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
};