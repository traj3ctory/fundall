import Request from "@/utils/Request";
import Toast from "@/utils/Toast";
import clearUserData from "@/utils/clear";

import store from "@/store";

class LoginService {
  /**
   * INNOVATOR LOGIN FUNCTION
   * @param {*} data i.e login formData
   * @param {*} url i.e Api-Url
   * @returns response.data only if status is 'OK'
   */
  async login(data) {
    clearUserData();
    const response = await Request("POST", `login`, data);
    if (response?.success?.user?.access_token) {
      const { user } = response.success;
      store.commit("token", user.access_token);
      store.commit("token_type", user.token_type);
      store.commit("details", user);
      localStorage.setItem("human_id", user.access_token);
      Toast("", "Login Successfully", "success");
      return true;
    }
  }
  //  ===========================
  /**
   * !! LOGOUT FUNCTION
   * @returns clears all user data and redirects to the homepage
   */
  async logout() {
    clearUserData();
    store.commit("logout");
    Toast("", "you have successfully logged out", "");
  }
}

export default new LoginService();
