const stbs = (state, action) => {
    const newAction = [...state.question, action.payload];
    if (action.type === "QUESTION") {
        return {...state, question: newAction };
    }
};
export default stbs;