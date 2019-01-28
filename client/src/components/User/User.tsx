import { VNode } from "vue";
import { component } from "vue-tsx-support";

import {
  VBtn,
  VLayout,
  VFlex,
} from "vuetify-tsx";


const UserComponent = component({
    render(): VNode {
      return <VLayout row wrap>
          <VFlex md4>
            <h1>人员管理</h1>
          </VFlex>
          <VFlex md8>
            <VBtn to={{ name: "home" }}>
              <div>主页</div>
            </VBtn>
          </VFlex>
        </VLayout>;
    }
});

export default UserComponent;
