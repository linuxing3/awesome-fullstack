import { loadView } from "./routes";
export default {
  path: "/document",
  name: "document",
  meta: { breadcrumb: true },
  component: loadView("Document")
};
