//action creator
// -------------------------the .add takes properties from CreatePattern.js's state as props(dispatchtoprops) line 9
//make an async call to db(firebase) line 5
export const createPattern = pattern => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("patterns")
      .add({
        ...pattern,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PATTERN", pattern });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};



export const updateSort = state => {
  switch (state) {
    case "SORT_AUTHOR_FIRST_NAME":
      console.log("updateSort SORT_AUTHOR_FIRST_NAME")
      return state.pattern.sort((a, b) => a.authorFirstName > b.authorFirstName);
      //should this be return [...state.pattern] to avoid mutating?
    case "SORT_BY_DATE":
      console.log("updateSort: SORT_BY_DATE")
      return state.pattern.sort((a, b) => a.createdAt > b.createdAt);
    case "SORT_TITLE":
        console.log("updateSort: SORT_TITLE")
      return state.pattern.sort((a, b) => a.title > b.title);
    default:
      return state;
  }
};