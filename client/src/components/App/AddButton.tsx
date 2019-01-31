import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { VBtn, VIcon } from "vuetify-tsx";

const AddButtonComponent = component({
  methods: {
    showInputForm() {
      (window as any).getApp.$emit("APP_DRAWER_TOGGLED");
    }
  },
  render(): VNode {
    return (
      <VBtn
        fab
        bottom
        right
        color="pink"
        dark
        fixed
        onClick={this.showInputForm}
      >
        <VIcon>add</VIcon>
      </VBtn>
    );
  }
});

export default AddButtonComponent;
