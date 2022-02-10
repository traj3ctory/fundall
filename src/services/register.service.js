
import Request from "@/utils/Request";
import Toast from "@/utils/Toast";
import clearUserData from "@/utils/clear";

// import store from "@/store";

class RegisterService {
  /**
   * USER REGISTRATION FUNCTION
   * @param {*} data i.e registration formData
   * @param {*} url i.e Api-Url
   * @returns response.data only if status is 'OK'
   */
  async register(data) {
    clearUserData();
    const response = await Request("POST", `register`, data);
    if (response?.success?.message) {
      const { message } = response.data.success;
    //   store.commit("AUTH_STORE/user_token", token);
    //   localStorage.setItem("human_id", access_token);
      Toast("", message, "success");
      return true;
    }
  }
}

export default new RegisterService();
