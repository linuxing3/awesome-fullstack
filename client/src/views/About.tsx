import { VNode } from "vue";
import { component } from "vue-tsx-support";

import { DefaultLayout } from "@/layout";
import AboutPage from "@/components/AboutPage";

const AboutComponent = component({
  name: "App",
  render(): VNode {
    return <DefaultLayout>
        <AboutPage />
      </DefaultLayout>;
  },
});

export default AboutComponent;
