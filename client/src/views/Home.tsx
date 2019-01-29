import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppLayout } from "@/layout";
import MainPage from "@/components/MainPage";

export default component({
  render(): VNode {
    return (
      <AppLayout>
        <MainPage />
      </AppLayout>
    );
  }
});
