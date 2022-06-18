import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userList: []
  }),
  getters: {
    getUserById: state => {
      return userId => {
        const user = state.userList.find(user => user.id === userId)
        if (user) {
          return user.name
        } else {
          return userId || -1
        }
      }
    }
  },
  actions: {}
})
