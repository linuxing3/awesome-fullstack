import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { VCard, VLayout, VFlex, VTextField, VCardText } from "vuetify-tsx";

const UserForm = component({
  data() {
    return {
      username: "xingwenju",
      email: "xingwenju@gmail.com",
      password: "20090909"
    };
  },
  render(): VNode {
    let { username, password, email } = this;
    return (
      <VCard>
        <VCardText>
          <VLayout>
            <VFlex xs12 md12>
              <VTextField label="username" value={username} required />
            </VFlex>
            <VFlex xs12 md12>
              <VTextField label="email" value={email} required />
            </VFlex>
            <VFlex xs12 md12>
              <VTextField label="password" value={password} required />
            </VFlex>
          </VLayout>
        </VCardText>
      </VCard>
    );
  }
});

export default UserForm;
