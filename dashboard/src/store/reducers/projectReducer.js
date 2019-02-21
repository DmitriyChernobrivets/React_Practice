const initState = {
    projects: [
        { id: '1', title: 'help me find peach', content: 'bla bla bla' },
        { id: '2', title: 'help 2me find peach', content: 'bla bla bla' },
        { id: '3', title: 'help 3me find peach', content: 'bla bla bla' }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE PROJECT":
            console.log("project created", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error", action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;