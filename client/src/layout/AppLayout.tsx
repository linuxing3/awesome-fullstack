import { VNode } from "vue";
import { component } from "vue-tsx-support";

import AppToolbar from "@/components/AppToolbar";
import SideMenu from "@/components/SideMenu";
import AddButtonComponent from "@/components/AddButton";
import { VApp, VContent } from "vuetify-tsx";

const AppLayout = component({
  name: "AppLayout",
  render(): VNode {
    return (
      <VApp>
        <AppToolbar />
        <SideMenu />
        <VContent>{this.$slots.default}</VContent>
        <AddButtonComponent />
      </VApp>
    );
  }
});

export default AppLayout;
