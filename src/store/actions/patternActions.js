//action creator

export const createPattern = pattern => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make an async call to db(firebase)
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // -------------------------the .add takes properties from CreatePattern.js's state as props(dispatchtoprops)
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
