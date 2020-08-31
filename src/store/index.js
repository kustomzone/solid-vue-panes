import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'
import parle from './modules/parle'
import chat from './modules/chat'
import websocket from './modules/websocket'
import crud from './modules/crud'
import inbox from './modules/inbox'
import groups from './modules/groups'
import agora from './modules/agora'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { solid,  websocket, parle, chat, crud, inbox, groups, agora }
})