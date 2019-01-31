---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>Form.tsx"
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
%>import { VNode } from "vue";
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

const <%= modelName %>Form = componentFactoryOf<Events, ScopedSlots>()
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
        modelName: "<%= modelName.toLowerCase() %>",
      };
    },
    methods: {
      handleClick() {
      }
    },
    render(): VNode {
      let { modelName, items } = this;
      let { username, password, email } = this.model;

      let <%= modelName.toLowerCase() %>Card = (): VNode => {
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

      let <%= modelName.toLowerCase() %>Buttons = (): VNode => {
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
            {<%= modelName.toLowerCase() %>Card()}
          </VCardText>
          <VCardActions>
            {<%= modelName.toLowerCase() %>Buttons()}
          </VCardActions>
        </VCard>
      );
    }
  });

export default <%= modelName %>Form;
