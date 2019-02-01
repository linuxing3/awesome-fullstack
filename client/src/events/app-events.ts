interface AppEvent {
  name: string;
  callback: (payload: any) => any;
  snackbar?: any;
}

const AppEvents: AppEvent[] = [
  {
    name: "APP_LOGIN",
    callback: (payload: any) => {
      (window as any).getApp.snackbar = {
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
      (window as any).getApp.snackbar = {
        show: true,
        color: "green",
        message: "登出成功。"
      };
      return payload;
    }
  },
  {
    name: "APP_DRAWER_TOGGLED",
    callback: (payload: any) => {
      console.log("Toggled!");
      (window as any).getApp.snackbar = {
        show: true,
        color: "green",
        message: "登录成功。"
      };
      console.log((window as any).getApp.snackbar);
    }
  }
];

export default AppEvents;
