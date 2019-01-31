import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppLayout } from "@/layout";
import DocumentComponent from "@/components/Document/Document";

const Document = component({
  render(): VNode {
    return (
      <AppLayout>
        <DocumentComponent 
          scopedSlots={{ default: p => [<h2>{p.text}</h2>] }} />
      </AppLayout>
    );
  }
});

export default Document;