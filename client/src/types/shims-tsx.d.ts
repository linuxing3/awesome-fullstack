import Vue, { VNode } from "vue";

// import "vue-tsx-support/options/enable-vue-router";
// import "vue-tsx-support/options/allow-element-unknown-attrs";
// import "vue-tsx-support/options/allow-unknown-props";
// import "vue-tsx-support/options/enable-html-attrs";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    // interface IntrinsicElements {
    //   [elem: string]: any;
    // }
  }
}
