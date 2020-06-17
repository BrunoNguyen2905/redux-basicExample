export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADDVALUE = "ADDVALUE";
export const SUBTRACTVALUE = "SUBTRACTVALUE";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";


export const increment = () => {
    return  {
        type: INCREMENT
    };
};

export const decrement = () => {
    return  {
        type: DECREMENT
    };
};

export const addValue = (val) => {
    return  {
        type: ADDVALUE,
        value: val
    };
};

export const subtractValue = (val) => {
    return  {
        type: SUBTRACTVALUE,
        value: val
    };
};

export const storeResult = (result) => {
    return  {
        type: STORE_RESULT,
        result: result
    };
};

export const deleteResult = (resultId) => {
    return  {
        type: DELETE_RESULT,
        resultElId: resultId
    };
};



