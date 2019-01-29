import { VNode } from "vue";
import { component } from "vue-tsx-support";

import AppToolbar from "@/components/AppToolbar";

import { VApp, VContent } from "vuetify-tsx";

const AppLayout = component({
  name: "AppLayout",
  render(): VNode {
    return (
      <VApp>
        <AppToolbar />
        <VContent>{this.$slots.default}</VContent>
      </VApp>
    );
  }
});

export default AppLayout;
