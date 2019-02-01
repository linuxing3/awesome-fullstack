import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { VBtn, VCard, VLayout, VFlex, VTextField, VCardText } from "vuetify-tsx";

const UserForm = component({
  data() {
    return {
      username: "xingwenju",
      email: "xingwenju@gmail.com",
      password: "20090909",
    };
  },
  methods: {
    toggleInput() {
      (window as any).UserForm.$emit("TOGGLE_INPUT");
    },
  },
  render(): VNode {
    let { username, password, email } = this;
    return (
      <VCard>
        <VCardText>
          <VLayout row wrap>
            <VFlex xs12 md12>
              <VTextField label="username" value={username} required />
            </VFlex>
            <VFlex xs12 md12>
              <VTextField label="email" value={email} required />
            </VFlex>
            <VFlex xs12 md12>
              <VTextField label="password" value={password} required />
            </VFlex>
            <VFlex xs12 md6>
              <VBtn flat onClick={this.createItem}>
                添加
              </VBtn>
            </VFlex>
            <VFlex xs12 md6>
              <VBtn flat onClick={this.toggleInput}>
                取消
              </VBtn>
            </VFlex>
          </VLayout>
        </VCardText>
      </VCard>
    );
  },
});

export default UserForm;
