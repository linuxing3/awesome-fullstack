import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { VApp, VContent } from "vuetify-tsx";
import AppToolbar from "@/components/App/AppToolbar";

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
