export default (state, action) => {
  switch (action.type) {
    case "activeScrollableTab":
      return { active: action.payload };

    default:
      throw new Error();
  }
};
