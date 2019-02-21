export const createProject = (project) => {
    return (dispath, getState, { getFirebase, getFirestore }) => {
        const firesstore = getFirestore();
        const profile = getState().firebase.profile;
        const autorId = getState().firebase.auth.uid;
        firesstore.collection('projects').add({
            ...project,
            firstName: profile.firstName,
            lastName: profile.lastName,
            authorid: autorId,
            created: new Date()
        }).then(() => dispath({ type: "CREATE PROJECT", project }))
            .catch((err) => {
                dispath({ type: 'CREATE_PROJECT_ERROR', err })
            })

    }
};