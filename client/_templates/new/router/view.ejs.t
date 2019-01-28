---
to: src/views/<%= h.capitalize(h.inflection.singularize(model)) %>.tsx
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
%>import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppLayout } from "@/layout";
import <%= modelName =%> from "@/components/<%= modelName %>/<%= modelName %>";

export default component({
  render(): VNode {
    return (
      <AppLayout>
        Here input you component, like User...
      </AppLayout>
    )
  }
});