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

const DocumentForm = componentFactoryOf<Events, ScopedSlots>().create({
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
        title: "Vue tsx support",
        author: "xingwenju",
        content: "Vue tsx will be supported in 3.0. Vola!"
      },
      modelName: "document"
    };
  },
  methods: {
    handleClick() {}
  },
  render(): VNode {
    let { modelName, items } = this;

    let documentCard = (): VNode => {
      let { title, author, content } = this.model;
      return (
        <VLayout row wrap>
          <VFlex xs12 md12>
            <VTextField label="Title" value={title} required />
          </VFlex>
          <VFlex xs12 md12>
            <VTextField label="Author" value={author} required />
          </VFlex>
          <VFlex xs12 md12>
            <VTextField label="Content" value={content} required />
          </VFlex>
        </VLayout>
      );
    };

    let documentButtons = (): VNode => {
      return (
        <VLayout row justify-center>
          <VFlex offset-md8>
            <VBtn dark class="primary" onClick={this.saveItem}>
              <VIcon>add</VIcon>
            </VBtn>
          </VFlex>
          <VFlex>
            <VBtn dark class="danger" onClick={this.deleteItem}>
              <VIcon>delete</VIcon>
            </VBtn>
          </VFlex>
          <VFlex>
            <VBtn dark class="warning" onClick={this.updateItem}>
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
        <VCardText>{documentCard()}</VCardText>
        <VCardActions>{documentButtons()}</VCardActions>
      </VCard>
    );
  }
});

export default DocumentForm;
