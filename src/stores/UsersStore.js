import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [
      { numberX: 1, numberY: 2, addingResult: 3, multiplyingResult: 2 },
      { numberX: 3, numberY: 4, addingResult: 7, multiplyingResult: 12 },
    ],
    mailAddress: "example@gmail.com",
  }),

  actions: {
    updateMailAddress(newAddress) {
      this.mailAddress = newAddress;
    },
  },
});
