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

const menuError = (err) => {
    console.log(err);
    return {
        type: "MENU_ERROR",
    };
};


export {
    menuLoaded,
    menuRequested,
    menuError
};