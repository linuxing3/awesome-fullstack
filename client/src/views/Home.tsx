import { VNode } from "vue";
import { component } from "vue-tsx-support";

import MainPage from "@/components/MainPage";
export default component({
  render(): VNode {
    return <MainPage />;
  }
});
