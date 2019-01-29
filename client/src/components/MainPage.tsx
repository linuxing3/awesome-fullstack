import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { VBtn, VLayout } from "vuetify-tsx";

const MainPage = component({
  name: "MainPage",
  render(): VNode {
    return (
      <VLayout>
        <h1>Main Page</h1>
        <VBtn to={{ name: "about" }}>
          <span class="mr-2">About</span>
        </VBtn>
        <VBtn to={{ name: "user" }}>
          <span class="mr-2">User</span>
        </VBtn>
      </VLayout>
    );
  }
});

export default MainPage;
