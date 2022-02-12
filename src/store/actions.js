import Request from "@/utils/Request";
import Toast from "@/utils/Toast";
import clearUserData from "@/utils/Clear";
import router from "@/routes/routes";

export const actions = {
  // call the register function
  async REGISTER_USER(context, payload) {
    try {
      context.commit("loading", true);
      const response = await Request("POST", "register", payload);
      Toast("Success", response.success.message, "success");
      router.push("/login");
      return;
    } catch (error) {
      Toast(error.error.status, error.error.message, "warning");
    } finally {
      context.commit("loading", false);
    }
  },
  // call the login function
  async LOGIN_USER(context, payload) {
    try {
      context.commit("loading", true);
      clearUserData();
      const response = await Request("POST", "login", payload);
      const { user, status } = response.success;
      context.commit("token", user.access_token);
      context.commit("details", { ...user });
      context.commit("token_type", user.token_type);
      localStorage.setItem("human_id", user.access_token);
      Toast(status, "Login Successfully", "success");
      router.push(`/profile/${user.firstname}-${user.lastname}`);
      return;
    } catch (error) {
      const { code, message } = error.error;
      Toast(code, message, "warning");
    } finally {
      context.commit("loading", false);
    }
  },
  // Function to get user details
  async GET_USER_DETAILS(context) {
    try {
      context.commit("loading", true);
      const response = await Request("GET", "base/profile");
      const { data, status } = response.success;
      context.commit("details", { ...data });
      Toast(status, "User details fetched successfully", "success");
      return;
    } catch (error) {
      Toast(error.error.code, error.error.error, "warning");
    } finally {
      context.commit("loading", false);
    }
  },
  // Function to  update avatar
  async UPDATE_AVATAR(context, payload) {
    try {
      context.commit("loading", true);
      const response = await Request("POST", "base/avatar", payload);
      const { message, status } = response?.success;
      //call the get user details function
      await this.dispatch("GET_USER_DETAILS");
      Toast(status, message, "success");
      return;
    } catch (error) {
      Toast(error.error.code, error.error.message, "warning");
    } finally {
      context.commit("loading", false);
    }
  },
  // Function to logout
  async LOGOUT(context) {
    try {
      context.commit("loading", true);
      context.commit("logout");
      clearUserData();
      Toast("Success", "Logout Successfully", "info");
      router.push("/login");
      return;
    } catch (error) {
      Toast("Error", error.message, "warning");
    } finally {
      context.commit("loading", false);
    }
  },
  // Function to set user target
  async SET_TARGET(context, payload) {
    context.commit("target", payload);
  },

  // Function to set the loading state
  async SET_LOADING(context, payload) {
    context.commit("loading", payload);
  },
};
