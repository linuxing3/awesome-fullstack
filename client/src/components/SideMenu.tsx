import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { join } from "path";

import {
  VNavigationDrawer,
  VList,
  VListTile,
  VListTileContent,
  VListTileTitle,
  VListGroup,
  VListTileAction,
  VSubheader,
  VDivider,
} from "vuetify-tsx";

interface ISideMenuData {
  items: any [];
}

const SideMenu = tsx.componentFactoryOf<ISideMenuData>().create({
  name: "SideMenu",
  data(): ISideMenuData {
    return {
      items: [
        { header: "主要功能"},
        {
          title: "单位管理",
          name: "Entity",
          group: "apps",
          icon: "fas fa-building",
        },
        {
          title: "活动管理",
          name: "Activity",
          group: "apps",
          icon: "fas fa-calendar",
        },
        {
          title: "人员管理",
          name: "User",
          group: "User",
          items: [
            {          
              title: "信息",
              name: "Information",
              group: "User",
              icon: "fas fa-calender"
            },
            {          
              title: "考核",
              group: "User",
              name: "Evaluation",
              icon: "fas fa-calender"
            },
          ]
        },
      ],
    };
  },
  computed: {},
  methods: {},
  render(): VNode {

    const { items } = this;

    let subHeader = item => <VSubheader>{item.header}</VSubheader>;

    let subMenu = subItem => (
        <VListTile ripple>
          <VListTileContent>
            <VListTileTitle>{subItem.title}</VListTileTitle>
          </VListTileContent>
        </VListTile>
    );

    return (
      <VNavigationDrawer fixed dark app width="260">
        <VList dense expand dark color="indigo">
          {items.map(item => {
            return (
              <VListGroup
                prependIcon={item.icon}
                key={item.name}
                group={item.group}
                noAction
              >
                {/* generate mainMenu */}
                <VListTile slot={"activator"} ripple>
                  <VListTileContent>
                    <VListTileTitle>{item.title}</VListTileTitle>
                  </VListTileContent>
                </VListTile>
                {/* generate SubMenu if have */}
                { item.items !== undefined ? item.items.map(subItem => subMenu(subItem)): <VDivider></VDivider>}
              </VListGroup>
            );
          })}
        </VList>
      </VNavigationDrawer>
    );
  },
});
export default SideMenu;
