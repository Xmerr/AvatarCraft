export const actions = {
    CHANGE_HEAD: "Changes the selected head",
    CHANGE_FLESH: "Changes the selected flesh color"
};

export const changeHead = head => {
    return {
        type: actions.CHANGE_HEAD,
        head
    };
};

export const changeFlesh = flesh => {
    return {
        type: actions.CHANGE_FLESH,
        flesh
    };
};