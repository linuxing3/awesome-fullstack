import { VNode } from "vue"
import { component } from "vue-tsx-support"

import {
  VCard,
  VCardTitle,
  VLayout,
  VFlex,
  VBtn,
  VCardText,
  VCardActions,
} from "vuetify-tsx"

const MainPage = component({
  name: "MainPage",
  render(): VNode {
    return (
      <VLayout row wrap>
        <VFlex md2 />
        <VFlex md6>
          <VCard>
            <VCardTitle class="primary white--text">
              <h1>主页</h1>
            </VCardTitle>
            <VCardText>Vuetify is awesome material desing</VCardText>
            <VCardActions>
              <VBtn to={{ name: "about" }}>
                <div>About</div>
              </VBtn>
              <VBtn to={{ name: "users" }}>
                <div>User</div>
              </VBtn>
            </VCardActions>
          </VCard>
        </VFlex>
      </VLayout>
    )
  },
})

export default MainPage
