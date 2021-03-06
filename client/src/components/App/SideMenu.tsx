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
  VSubheader,
  VDivider,
  VAvatar,
  VImg,
  VToolbar,
  VToolbarTitle
} from "vuetify-tsx";

interface Item {
  title: string;
  name: string;
  group: string;
  icon: string;
  header?: string;
  items?: Item[];
}

interface ISideMenuData {
  drawer: boolean;
  items: Item[];
}

const SideMenu = tsx.componentFactoryOf<ISideMenuData>().create({
  name: "SideMenu",
  data(): ISideMenuData {
    return {
      drawer: false,
      items: [
        {
          title: "单位管理",
          name: "entity",
          group: "apps",
          icon: "fas fa-building"
        },
        {
          title: "活动管理",
          name: "activity",
          group: "apps",
          icon: "fas fa-calendar"
        },
        {
          title: "人员管理",
          name: "user",
          group: "user",
          icon: "fas fa-inbox",
          items: [
            {
              title: "信息",
              name: "user-information",
              group: "user",
              icon: "fas fa-calender"
            },
            {
              title: "考核",
              group: "user",
              name: "user-evaluation",
              icon: "fas fa-calender"
            }
          ]
        }
      ]
    };
  },
  computed: {
    logoUrl: () => join(process.env.BASE_URL, "icon/keep.png")
  },
  created() {
    this.$on("APP_DRAWER_TOGGLED", () => (this.drawer = !this.drawer));
    (window as any).SideMenu = this;
  },
  render(): VNode {
    const { items } = this;

    let subHeader = (item: Item) => <VSubheader>{item.header}</VSubheader>;

    let subMenu = (subItem: Item) => (
      <VListTile ripple to={{ name: subItem.name }}>
        <VListTileContent>
          <VListTileTitle>{subItem.title}</VListTileTitle>
        </VListTileContent>
      </VListTile>
    );

    return (
      <VNavigationDrawer
        dark={this.$vuetify.dark}
        fixed
        app
        width="260"
        value={this.drawer}
      >
        <VToolbar color="primary" dark>
          <img height={48} src={this.logoUrl} />
          <VToolbarTitle class="ml-0 pl-3">
            <span class="hidden-sm-and-down">综合管理系统</span>
          </VToolbarTitle>
        </VToolbar>
        <VList>
          {items.map((item: Item) => {
            return (
              <VListGroup
                prependIcon={item.icon}
                key={item.name}
                group={item.group}
                noAction
              >
                {/* generate mainMenu */}
                <VListTile
                  slot={"activator"}
                  ripple
                  to={{ name: item.name }}
                >
                  <VListTileContent>
                    <VListTileTitle>{item.title}</VListTileTitle>
                  </VListTileContent>
                </VListTile>
                {/* generate SubMenu if have */}
                {item.items !== undefined ? (
                  item.items.map(subItem => subMenu(subItem))
                ) : (
                  <VDivider />
                )}
              </VListGroup>
            );
          })}
        </VList>
      </VNavigationDrawer>
    );
  }
});
export default SideMenu;
