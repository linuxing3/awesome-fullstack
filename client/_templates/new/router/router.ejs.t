---
to: src/router/<%= h.capitalize(h.inflection.singularize(model)) %>.ts
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
%>import { loadView } from "./routes";
export default {
  path: "/<%= modelName.toLowerCase() %>",
  name: "<%= modelName.toLowerCase() %>",
  meta: { breadcrumb: true },
  component: loadView("<%= modelName %>"),
};
