import { VNode } from "vue";
import { componentFactoryOf, withUnknownProps } from "vue-tsx-support";

import adonisMixin from "@/mixins/adonisMixin";

import { VDataTable, VBtn, VLayout, VFlex } from "vuetify-tsx";

const UserComponent = componentFactoryOf()
  .mixin(adonisMixin)
  .create({
    data() {
      return {
        model: {},
        modelName: "users"
      };
    },
    render(): VNode {
      let { modelName, items } = this;
      let headers = Object.keys(items[0]);

      // left side panel
      let leftSide = () => (
        <VFlex md12>
          <VFlex md4>
            <h1>{modelName}</h1>
          </VFlex>
          <VFlex md8>
            <VBtn to={{ name: "home" }}>
              <div>主页</div>
            </VBtn>
          </VFlex>
        </VFlex>
      );

      // Data table
      let table = () => {
        return (
          <VFlex md12>
            <table>
              <tr>
                {headers.map(header => (
                  <th>{header}</th>
                ))}
              </tr>
              {items.map(item => {
                return <tr>{Object.keys(item).map(key => <td>{item[key]}</td>)}</tr>;
              })}
            </table>
          </VFlex>
        );
      };

      return (
        <VLayout row wrap>
          {leftSide()}
          {table()}
        </VLayout>
      );
    }
  });

export default UserComponent;
