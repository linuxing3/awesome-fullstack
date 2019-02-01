import { VNode } from "vue";
import { component } from "vue-tsx-support";

import AppToolbar from "@/components/App/AppToolbar";
import SideMenu from "@/components/App/SideMenu";
import AddButtonComponent from "@/components/App/AddButton";

import { VSnackbar } from "vuetify/lib";

import { VApp, VContent, VBtn } from "vuetify-tsx";
import AppEvents from "@/events/app-events";

const AppLayout = component({
  name: "AppLayout",
  data() {
    return {
      snackbar: {
        show: false,
        color: "red",
        message: "Alert"
      },
      modelName: "app"
    };
  },
  created() {
    AppEvents.forEach(event => {
      this.$on(event.name, event.callback);
    });
    (window as any).getApp = this;
  },
  render(): VNode {
    let { color, show, message } = this;
    return (
      <VApp>
        <AppToolbar />
        <SideMenu />
        <VContent>{this.$slots.default}</VContent>
        <AddButtonComponent />
        <VSnackbar color={color} value={show}>
          {message}
          <VBtn color="pink" flat onClick={(show = false)} />
        </VSnackbar>
      </VApp>
    );
  }
});

export default AppLayout;
