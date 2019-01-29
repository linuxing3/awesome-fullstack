import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { VLayout, VFlex, VBtn } from "vuetify-tsx";

const AboutComponent = component({
  name: "App",
  render(): VNode {
    return (
      <VLayout row wrap>
        <VFlex md4>
          <h1>关于</h1>
        </VFlex>
        <VFlex md8>
          <VBtn to={{ name: "home" }}>
            <div>主页</div>
          </VBtn>
        </VFlex>
      </VLayout>
    );
  }
});

export default AboutComponent;
