

const initialUserState = {
    sec:"",
    lang:"en"
}


function reducer(state = initialUserState, action) {

    

    switch (action.type) {

        case "ENGLISH":{
            return { ...state, lang:"en"};
   
        }
            //return { ...state, allUsers:[...action.payload]};
        case "עברית":
            return { ...state, lang:"he"};

        case "CHANGE-SEC":
            return {...state,sec:action.payload}

        default:
            return state
    }

}

export default reducer