export default {
  bugsClicked(context, payload) {
    const isBugsClicked = payload.isClicked;
    context.commit('setIsBugsClicked', isBugsClicked);
  }
}