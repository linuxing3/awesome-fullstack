---
to: src/router/<%= h.capitalize(h.inflection.singularize(model)) %>.ts
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const pathName = (h.inflection.singularize(model)).toLowerCase()
%>import { loadView } from "./routes";
export default {
  path: "/<%= pathName %>",
  name: "<%= pathName %>",
  meta: { breadcrumb: true },
  component: loadView(`<%= modelName %>`)
};
