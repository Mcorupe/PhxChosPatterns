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
        //content should be on ...pattern, but i cant see it going into firebase
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
