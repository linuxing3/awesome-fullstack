const AppEvents = [
  {
    name: "APP_LOGIN",
    callback: (payload: any) => {
      this.snackbar = {
        show: true,
        color: "green",
        message: "登录成功。"
      };
      return payload;
    }
  },
  {
    name: "APP_LOGOUT",
    callback: (payload: any) => {
      this.snackbar = { show: true, color: "green", message: "登出成功。" };
      return payload;
    }
  },
  {
    name: "APP_DRAWER_TOGGLED",
    callback: (payload: any) => {
      this.snackbar = {
        show: true,
        color: "green",
        message: "切换边栏"
      };
      return payload;
    }
  }
];

export default AppEvents;
