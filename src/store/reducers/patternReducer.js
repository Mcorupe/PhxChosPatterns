const initState = {
  patterns: [
    { id: "1", title: "", content: [{ feet: "", hands: "" }] },
    { id: "2", title: "", content: [{ feet: "", hands: "" }] },
    { id: "3", title: "", content: [{ feet: "", hands: "" }] },
    { id: "4", title: "", content: [{ feet: "", hands: "" }] }
  ]
};

//making a selector for .sort(authorFirstName, createdAt, title)
//.....or did i just make a reducer WHAT IS THE DIFFERNCE  =S
export const currentSort = state => {
  switch (state) {
    case "SORT_AUTHOR_FIRST_NAME":
      console.log("currentSort SORT_AUTHOR_FIRST_NAME")
      return state.pattern.sort((a, b) => a.authorFirstName > b.authorFirstName);
    case "SORT_BY_DATE":
      console.log("currentSort: SORT_BY_DATE")
      return state.pattern.sort((a, b) => a.createdAt > b.createdAt);
    case "SORT_TITLE":
        console.log("currentSort: SORT_TITLE")
      return state.pattern.sort((a, b) => a.title > b.title);
    default:
      return state;
  }
};

export const selectPatternSort = state => state.pattern






//this gets stored on the pattern property on state by the rootReducer
const patternReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PATTERN":
      console.log("created pattern", action.pattern);
      return state;
    case "CREATE_PATTERN_ERROR":
      console.log("create pattern error", action.err);
      return state;
    default:
      return state;
  }
};

export default patternReducer;
