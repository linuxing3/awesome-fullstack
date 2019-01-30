import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppLayout } from "@/layout";
import UserComponent from "@/components/User/User";

export default component({
  render(): VNode {
    return (
      <AppLayout>
        <UserComponent scopedSlots={{
          default: p => [<h2>{p.text}</h2>]
        }}/>
      </AppLayout>
    );
  }
});
