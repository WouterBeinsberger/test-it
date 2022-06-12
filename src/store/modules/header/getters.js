export default {
  isBugsClicked(state) {
    return state.isBugsClicked;
  },
  bugsButtonValue(state, getters){
    if (getters.isBugsClicked) {
      return "Close";
    }
    return state.bugsButtonValue;
  }
}