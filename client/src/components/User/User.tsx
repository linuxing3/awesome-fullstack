import { VNode } from "vue";
import { componentFactoryOf, withUnknownProps } from "vue-tsx-support";

// import adonisMixin from "@/mixins/adonisMixin";

import {
  VDataTable,
  VBtn,
  VLayout,
  VFlex,
  VCard,
  VCardTitle,
  VCardActions,
  VCardText,
  VSpacer,
  VDivider,
  VDialog
} from "vuetify-tsx";

import UserForm from "./UserForm";

interface Data {
  dialog: boolean;
  model: any;
  modelName: string;
  mockItems: { name: string; age: string }[];
  mockHeaders: { name: string; value: string }[];
}

interface Events {
  onOk: void;
  onError: { code: number; detail: string };
}

interface ScopedSlots {
  default: { text: string };
}

const UserComponent = componentFactoryOf<Events, ScopedSlots>()
  // .mixin(adonisMixin)
  .create({
    props: {
      text: String
    },
    data(): Data {
      return {
        dialog: false,
        model: {},
        modelName: "user",
        mockItems: [
          {
            name: "xingwenju",
            age: "40"
          },
          {
            name: "wanglulu",
            age: "40"
          }
        ],
        mockHeaders: [
          { name: "name", value: "name" },
          { name: "age", value: "age" }
        ]
      };
    },
    created() {
      this.$on("TOGGLE_INPUT", () => (this.dialog = !this.dialog));
      (window as any).UserForm = this;
    },
    render(): VNode {
      let { modelName, mockItems, mockHeaders, dialog } = this;

      // left side panel
      let rightButton = (): VNode => (
        <VBtn flat outline class="white--text" to={{ name: "home" }}>
          <div>主页</div>
        </VBtn>
      );

      // header
      let tableHeader = (headers: any[]): VNode => {
        return (
          <tr>
            {headers.map(header => (
              <th>{header.name}</th>
            ))}
          </tr>
        );
      };
      // body
      let tableRow = (row): VNode => {
        return (
          <tr>
            {Object.keys(row).map(key => {
              return <td>{row[key]}</td>;
            })}
          </tr>
        );
      };
      // Data table
      let tableSlot = (): VNode => {
        // VDataTable
        return (
          <VDataTable hideActions items={mockItems} headers={mockHeaders}>
            <VFlex slot={"headers"} scopedSlots={{ props: undefined }}>
              {tableHeader(mockHeaders)}
            </VFlex>
          </VDataTable>
        );
      };

      // Data table
      let userCard = (): VNode => {
        return (
          <VFlex>
            {mockItems.map(row => {
              return (
                <VCard>
                  {Object.keys(row).map((key, index) => (
                    /* start row */
                    <VCardText>
                      <p>
                        <VLayout>
                          <VFlex md4>
                            <strong>{key}</strong>:
                          </VFlex>
                          <VFlex md8>{row[key]}</VFlex>
                        </VLayout>
                      </p>
                    </VCardText>
                  ))
                  /* end row */
                  }
                </VCard>
              );
            })}
          </VFlex>
        );
      };

      let slotTitle = (text): VNode => {
        return this.$scopedSlots.default({
          text
        });
      };

      return (
        <VCard>
          <VCardTitle class="primary white--text">
            {slotTitle("User component")}
            <VSpacer />
            {rightButton()}
          </VCardTitle>
          <VCardText class="heading grey--text">{userCard()}</VCardText>
          <VDialog width={500} value={dialog}>
            <UserForm />
          </VDialog>
        </VCard>
      );
    }
  });

export default UserComponent;
