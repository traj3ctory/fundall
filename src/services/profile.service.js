import Request from "@/utils/Request";
import Toast from "@/utils/Toast";
import clearUserData from "@/utils/clear";
import store from "@/store";

class UserProfileService {
  /**
   * GET USER PROFILE FUNCTION
   * @param {*} url i.e Api-Url
   * @returns response.data only if status is 'OK'
   */
  async getProfile() {
    clearUserData();
    const response = await Request("", `base/profile`);
    if (response?.success) {
      const { data } = response.success;
      store.commit("profile", data);
      Toast("", "Success", "success");
      return true;
    }
  }
  //   ==========================
  /**
   * UPDATE USER AVATAR FUNCTION
   * @param {*} url i.e Api-Url
   * @returns response.data only if status is 'OK'
   */
  async updateAvatar(data) {
    clearUserData();
    const response = await Request("POST", `base/avatar`, data);
    if (response?.success) {
      const { status, message } = response.success;
      Toast(status, message, "success");
      return true;
    }
  }
}

export default new UserProfileService();
