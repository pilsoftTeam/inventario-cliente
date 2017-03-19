/**
 * Created by neojpk on 19-03-2017.
 */
const state = {
  access_token: null,
  refresh_token: null
};
const mutations = {
  SET_USER_TOKEN(state, authData){
    state.access_token = authData.access_token;
    state.refresh_token = authData.refresh_token;
  }
};
const actions = {
  setUserToken({commit}, authData){
    commit('SET_USER_TOKEN', authData)
  }
};

export default {
  state, mutations, actions
}
