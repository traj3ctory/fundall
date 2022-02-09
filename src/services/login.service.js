import Request from "@/utils/Request";
import Toast from "@/utils/Toast";

// import store from "@/store";

class LoginService {
  /**
   * INNOVATOR LOGIN FUNCTION
   * @param {*} data i.e login formData
   * @param {*} url i.e Api-Url
   * @returns response.data only if status is 'OK'
   */
  async login(data) {
    this.removeUserData();
    const response = await Request("POST", `login`, data);
    if (response?.data?.user?.access_token) {
      const { access_token } = response.data.user;
    //   store.commit("AUTH_STORE/user_token", token);
      localStorage.setItem("human_id", access_token);
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
    this.removeUserData();
    // store.commit("AUTH_STORE/logout");
    Toast("", "you have successfully logged out", "");
  }
  //   ===========================

  /**
   * Function to remove TOKEN USER_ID AND CATEGORY from localStorage
   */
  async removeUserData() {
    localStorage.removeItem("human_id");
  }
}

export default new LoginService();
