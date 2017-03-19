/**
 * Created by neojpk on 19-03-2017.
 */
const state = {
  user: {}
};
const mutations = {
  SET_AUTH_USER(state, userObj){
    state.user = userObj
  }
};
const actions = {
  setUserObject({commit}, userObj){
    commit('SET_AUTH_USER', userObj)
  }
};

export default {
  state, mutations, actions
}
