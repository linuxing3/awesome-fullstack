import { loadView } from "./routes";
export default {
  path: "/user",
  name: "user",
  meta: { breadcrumb: true },
  component: loadView("User")
};
