import { VNode } from "vue";
import { componentFactoryOf } from "vue-tsx-support";
import DocumentForm from "./DocumentForm";

import {
  VLayout,
  VFlex,
  VCard,
  VCardTitle,
  VCardText,
} from "vuetify-tsx";


interface Data {
  model: any;
  modelName: string;
  items: any[];
}

interface Events {
  onOk: void;
  onError: { code: number; detail: string };
}

interface ScopedSlots {
  default: { text: string };
}

const DocumentComponent = componentFactoryOf<Events, ScopedSlots>()
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
          title: "Vue tsx support",
          author: "xingwenju",
          content: "Vue tsx will be supported in 3.0. Vola!"
        },
        modelName: "document",
        items: [{
          title: "Vue tsx support",
          author: "xingwenju",
          content: "Vue tsx will be supported in 3.0. Vola!"
        },{
          title: "Vue tsx support",
          author: "xingwenju",
          content: "Vue tsx will be supported in 3.0. Vola!"
        }]
      };
    },
    render(): VNode {
      let { modelName, items } = this;

      let documentCard = (): VNode => {
        return (
          <VFlex>
            {items.map(row => {
              return (
                <VCard>
                  {Object.keys(row).map((key, index) => (
                    /* start row */
                    <VCardText>
                      <p>
                        <VLayout>
                          <VFlex md4>
                            <strong>{key}</strong>:
                          </VFlex>
                          <VFlex md8>{row[key]}</VFlex>
                        </VLayout>
                      </p>
                    </VCardText>
                  ))
                  /* end row */
                  }
                </VCard>
              );
            })}
          </VFlex>
        );
      };
      /**
      |-------------------------------------------------------------------------
      | slot is typesafed
      | @param {String} text
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
          <VCardTitle class="primary white--text">
            {slotTitle("Document Component")}
          </VCardTitle>
          <VCardText class="heading grey--text">
            {documentCard()}
          </VCardText>
          <VCardText class="heading grey--text">
            <DocumentForm />
          </VCardText>
        </VCard>
      );
    }
  });

export default DocumentComponent;
