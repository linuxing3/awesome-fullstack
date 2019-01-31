import { VNode } from "vue";
import { componentFactoryOf } from "vue-tsx-support";

import {
  VBtn,
  VIcon,
  VLayout,
  VFlex,
  VCard,
  VCardActions,
  VCardText,
  VTextField
} from "vuetify-tsx";


interface Data {
  model: any;
  modelName: string;
}

interface Events {
  onOk: void;
  onError: { code: number; detail: string };
}

interface ScopedSlots {
  default: { text: string };
}

const DocumentFormComponent = componentFactoryOf<Events, ScopedSlots>()
  .create({
    props: {
      text: String
    },
    /**
    |---------------------------------------------------------------------------
    | Data is typesafed
    |---------------------------------------------------------------------------
    */
    data(): Data {
      return {
        model: {
          username: "xingwenju",
          email: "xingwenju@gmail.com",
          password: "20090909"
        },
        modelName: "document",
      };
    },
    methods: {
      handleClick() {
      }
    },
    render(): VNode {
      let { modelName, items } = this;

      let documentCard = (): VNode => {
        let { username, password, email } = this;
        return (
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
        );
      };

      let documentButtons = (): VNode => {
        return (
          <VLayout>
            <VFlex xs12 md4>
              <VBtn onClick={this.saveItem}>
                <VIcon>add</VIcon>
              </VBtn>
            </VFlex>
            <VFlex xs12 md4>
              <VBtn onClick={this.deleteItem}>
                <VIcon>delete</VIcon>
              </VBtn>
            </VFlex>
            <VFlex xs12 md4>
              <VBtn onClick={this.updateItem}>
                <VIcon>edit</VIcon>
              </VBtn>
            </VFlex>
          </VLayout>
        );
      };


      /**
      |-------------------------------------------------------------------------
      | slot is typesafed
      |-------------------------------------------------------------------------
      */
      let slotTitle = (text): VNode => {
        return this.$scopedSlots.default({
          text
        });
      };

      /**
      |-------------------------------------------------------------------------
      | render function with jsx/tsx as return value
      |-------------------------------------------------------------------------
      */
      return (
        <VCard>
          <VCardText>
            {documentCard()}
          </VCardText>
          <VCardActions>
            {documentButtons()}
          </VCardActions>
        </VCard>
      );
    }
  });

export default DocumentFormComponent;
