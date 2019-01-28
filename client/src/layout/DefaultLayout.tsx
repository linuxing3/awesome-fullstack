import { VNode } from "vue";
import { component } from "vue-tsx-support";

import {
  VApp,
  VSpacer,
  VBtn,
  VContent,
  VToolbar,
  VToolbarTitle,
} from "vuetify-tsx";

const AppLayout = component({
  name: "AppLayout",
  render(): VNode {
    return (
      <VApp>
        <VToolbar app dark color="indigo">
          <VToolbarTitle>
            <span class="heading">通用管理系统</span>
          </VToolbarTitle>
          <VSpacer />
          <VBtn flat to={{ name: "home" }}>
            <span class="mr-2">主页</span>
          </VBtn>
        </VToolbar>
        <VContent>
          {this.$slots.default}
        </VContent>
      </VApp>
    );
  },
});

export default AppLayout;