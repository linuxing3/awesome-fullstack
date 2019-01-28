import { VNode } from "vue";
import { component } from "vue-tsx-support";

import {
  VAlert,
  VApp,
  VSpacer,
  VAvatar,
  VBadge,
  VBtn,
  VBtnToggle,
  VContainer,
  VContent,
  VFlex,
  VIcon,
  VLayout,
  VToolbar,
  VToolbarTitle,
} from "vuetify-tsx";


const MainPage = component({
    render(): VNode {
      return <VContainer>
          <h1>Main Page</h1>
          <VBtn to={{ name: "about" }}>
            <span class="mr-2">About</span>
          </VBtn>
          <VBtn to={{ name: "user" }}>
            <span class="mr-2">User</span>
          </VBtn>
        </VContainer>;
    }
});

export default MainPage;