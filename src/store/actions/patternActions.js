//action creator

export const createPattern = pattern => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make an async call to db(firebase)
    const firestore = getFirestore();
    // -------------------------the .add takes properties from CreatePattern.js's state as props(dispatchtoprops)
    firestore
      .collection("patterns")
      .add({
        ...pattern,
        authorFirstName: "Mark",
        authorLastName: "Corupe",
        authorId: 12345,
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
