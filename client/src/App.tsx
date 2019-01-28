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
  VToolbarTitle
} from "vuetify-tsx";


const App = component({
  name: "App",
  render(): VNode {
    return (
      <VApp>
        <VToolbar>
          <VToolbarTitle>
            <span>Vuetify</span>
            <span class="font-weight-light">MATERIAL DESIGN</span>
          </VToolbarTitle>
          <VSpacer></VSpacer>
          <VBtn>
            <span class="mr-2">Latest Release</span>
          </VBtn>
        </VToolbar>
        <VContent>
          content
        </VContent>
      </VApp>
      )
    }
  })

export default App;