import { VNode } from "vue";
import { component } from "vue-tsx-support";

import AppToolbar from "@/components/App/AppToolbar";
import SideMenu from "@/components/App/SideMenu";
import AddButtonComponent from "@/components/App/AddButton";
import AppSnackBar from "@/components/App/AppSnackBar";
import { VApp, VContent } from "vuetify-tsx";
import AppEvents from "@/events/app-events";

const AppLayout = component({
  name: "AppLayout",
  data() {
    return {
      snackbar: {
        message: "Alert",
        color: "red",
        show: false,
      },
      modelName: "app",
    };
  },
  created() {
    AppEvents.forEach(event => {
      this.$on(event.name, event.callback);
    });
    (window as any).getApp = this;
  },
  render(): VNode {
    return (
      <VApp>
        <AppToolbar />
        <SideMenu />
        <VContent>{this.$slots.default}</VContent>
        <AddButtonComponent />
        <AppSnackBar />
      </VApp>
    );
  },
});

export default AppLayout;
