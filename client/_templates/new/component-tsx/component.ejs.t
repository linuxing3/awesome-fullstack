---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>.tsx"
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const modelFormComponent = h.capitalize(h.inflection.singularize(model)) + "Form"
%>import { VNode } from "vue";
import { componentFactoryOf } from "vue-tsx-support";
import <%= modelFormComponent %> from "./<%= modelFormComponent %>";

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

const <%= modelName %> = componentFactoryOf<Events, ScopedSlots>()
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
        model: {},
        modelName: "<%= modelName.toLowerCase() %>",
        items: [{
          name: "Daniel"
        }]
      };
    },
    render(): VNode {
      let { modelName, items } = this;

      let <%= modelName.toLowerCase() %>Card = (): VNode => {
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
            {slotTitle("<%= modelName %> Component")}
          </VCardTitle>
          <VCardText class="heading grey--text">
            {<%= modelName.toLowerCase() %>Card()}
          </VCardText>
          <VCardText class="heading grey--text">
            <<%= modelFormComponent %> />
          </VCardText>
        </VCard>
      );
    }
  });

export default <%= modelName %>;
