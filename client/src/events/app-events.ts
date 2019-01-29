const AppEvents = [
  {
    name: "APP_LOGIN",
    callback: (payload: any) => {
      this.stackbar = {
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
      this.stackbar = {
        show: true,
        color: "green",
        message: "登出成功。"
      };
      return payload;
    }
  }
];

export default AppEvents;
