import { VNode } from "vue";
import { component } from "vue-tsx-support";

import AppEvents from "@/events/app-events";

const App = component({
  name: "App",
  created() {
    AppEvents.forEach(event => {
      this.$on(event.name, event.callback);
    });
    (window as any).getApp = this;
  },
  render(): VNode {
    return <router-view />;
  }
});

export default App;
