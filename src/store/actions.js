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
      context.commit("profile_loading", true);
      const response = await Request("GET", "base/profile");
      const { data, status } = response.success;
      context.commit("details", { ...data });
      Toast(status, "User details fetched successfully", "success", 1000);
      return;
    } catch (error) {
      Toast(error.error.code, error.error.error, "warning");
    } finally {
      context.commit("profile_loading", false);
    }
  },
  // Function to  update avatar
  async UPDATE_AVATAR(context, payload) {
    try {
      context.commit("loading", true);
      const response = await Request("POST", "base/avatar", payload);
      const { message, status } = response?.success;
      setTimeout(() => {
        Toast(status, message, "success");
      }, 1000);
      context.commit("loading", false);
      //call the get user action without payload
      await context.dispatch("GET_USER_DETAILS");
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
  // Function to set user expenses
  async SAVE_EXPENSE(context, payload) {
    try {
      context.commit("loading", true);
      await context.commit("expenses", payload);
      Toast("Success", "Expense saved successfully", "success");
      return;
    } catch (error) {
      Toast(error.error.code, error.error.message, "warning");
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
  // Function to set profile page loader
  async SET_PROFILE_LOADER(context, payload) {
    context.commit("profile_loading", payload);
  },
};
