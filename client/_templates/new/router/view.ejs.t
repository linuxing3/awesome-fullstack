---
to: src/views/<%= h.capitalize(h.inflection.singularize(model)) %>.tsx
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
%>import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppLayout } from "@/layout";
import <%= modelName %>Component from "@/components/<%= modelName %>/<%= modelName %>";

const <%= modelName %> = component({
  render(): VNode {
    return (
      <AppLayout>
        <<%= modelName %>Component
          scopedSlots={{ default: p => [<h2>{p.text}</h2>] }} %>/>
      </AppLayout>
    );
  }
});

export default <%= modelName %>;