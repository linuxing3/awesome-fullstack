import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { AppLayout } from "@/layout";
import AboutPage from "@/components/AboutPage";

const AboutComponent = component({
  name: "App",
  render(): VNode {
    return (
      <AppLayout>
        <AboutPage />
      </AppLayout>
    );
  }
});

export default AboutComponent;
