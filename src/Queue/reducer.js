import { List } from 'immutable';

export const initialState = {
    customers: List.of()
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;