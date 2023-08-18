export const errorReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_DAY_ERROR':
            return { ...state, day: action.payload }
        case 'TOGGLE_MONTH_ERROR':
            return { ...state, month: action.payload }
        case 'TOGGLE_YEAR_ERROR':
            return { ...state, year: action.payload }
        case 'TOGGLE_DATE_ERROR':
            return { ...state, date: action.payload }
        default:
            return state
    }
}