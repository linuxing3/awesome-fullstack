import { VNode } from "vue";
import { componentFactoryOf, ofType } from "vue-tsx-support";

import {
  VCard,
  VCardText,
  VAlert,
  VBtn,
  VLayout,
  VFlex,
  VIcon,
} from "vuetify-tsx";
import { VSnackbar } from "vuetify/lib";

interface Props {
  color: string;
  value: boolean;
};

interface Data {
  model: any;
  modelName: string;
}

interface Events {
  onOk: void;
  onError: { code: number; detail: string };
  handleClick: void;
}

interface ScopedSlots {
  default: { text: string };
}

const AppSnackBar = componentFactoryOf<Events, ScopedSlots>()
  .create({
    props: {
      text: String
    },
    /**
    |---------------------------------------------------------------------------
    | Data is typesafed
    |---------------------------------------------------------------------------
    */
    data(): Data {
      return {
        model: {
          message: "Alert",
          color: "red",
          show: false
        },
        modelName: "app",
      };
    },
    methods: {
      handleClick() {
        // (window as any).getApp.$emit("APP_DRAWER_TOGGLED");
        this.model.show = !this.model.show;
      }
    },
    render(): VNode {
      let { message, color, show } = this.model;

      let appSnackBar = (): VNode => {
        return (
          <VSnackbar color={color} value={show}>
            {message}
            <VBtn color="pink" flat onClick={show = false}></VBtn>
          </VSnackbar>
        );
      };

      let appButtons = (): VNode => {
        return (
          <VLayout>
            <VFlex xs12 md4>
              <VBtn onClick={this.handleClick}>
                <VIcon>delete</VIcon>
              </VBtn>
            </VFlex>
          </VLayout>
        );
      };


      /**
      |-------------------------------------------------------------------------
      | slot is typesafed
      |-------------------------------------------------------------------------
      */
      let slotTitle = (text): VNode => {
        return this.$scopedSlots.default({
          text
        });
      };

      /**
      |-------------------------------------------------------------------------
      | render function with jsx/tsx as return value
      |-------------------------------------------------------------------------
      */
      return (
        <VCard>
          <VCardText>
            {appButtons()}
          </VCardText>
          {appSnackBar()}
        </VCard>
      );
    }
  });

export default AppSnackBar;
