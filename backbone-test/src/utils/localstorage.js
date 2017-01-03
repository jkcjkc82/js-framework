function loadData(key) {
    let saved_data = window.localStorage[key];

    if(!saved_data) {
        saved_data = [];
    } else {
        try {
            saved_data = JSON.parse(saved_data);
        } catch(e) {
            saved_data = [];
        }
    }

    return saved_data;
}

function saveData(key, value) {
    window.localStorage[key] =
        JSON.stringify(value); 
}

export {
    loadData, saveData
};
