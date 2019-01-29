import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { join } from "path";

import {
  VToolbar,
  VToolbarSideIcon,
  VMenu,
  VList,
  VListTile,
  VListTileContent,
  VListTileTitle,
  VTextField,
  VBtn,
  VAvatar,
  VIcon,
  VSpacer
} from "vuetify-tsx";

interface IAppToolbarEvents {
  handleDrawerToggle: (e: any) => void;
  goHomeRoute: (e: any) => void;
}

const AppToolbar = tsx.componentFactoryOf<IAppToolbarEvents>().create({
  name: "AppToolbar",
  data: () => ({
    items: [
      {
        icon: "settings",
        href: "#",
        title: "个人设置",
        click(e) {
          (window as any).getApp.$emit("APP_ACCOUNT_SETTING");
        }
      },
      {
        icon: "fullscreen_exit",
        href: "#",
        title: "登出",
        click(e) {
          (window as any).getApp.$emit("APP_LOGOUT");
        }
      }
    ]
  }),
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
    computeAvatar: () => join(process.env.BASE_URL, "avatar/mf-avatar.svg")
  },
  methods: {
    handleDrawerToggle(e) {
      (window as any).getApp.$emit("APP_DRAWER_TOGGLED");
    },
    goHomeRoute(e) {
      this.$router.push("/home");
    }
  },
  render(): VNode {
    let { items } = this;
    return (
      <VToolbar app>
        <VToolbarSideIcon nativeOn-click={this.handleDrawerToggle} />
        <VTextField
          flat
          solo-inverted
          prepend-icon={"search"}
          label={"Search"}
          class={"hidden-sm-and-down"}
        />
        <VSpacer />

        <VBtn icon to={{ name: "home" }}>
          <VIcon>home</VIcon>
        </VBtn>

        <VBtn icon href="mailto:linuxing3@qq.com">
          <VIcon>email</VIcon>
        </VBtn>

        <VBtn icon href="https://github.com/linuxing3/awesome-fullstack">
          <VIcon>fab fa-github</VIcon>
        </VBtn>

        <VMenu
          nudgeBottom={10}
          offsetY
          origin="center center"
          transition={"scale-transition"}
        >
          <VAvatar size={30} slot={"activator"}>
            <img src={this.computeAvatar} alt="Avatar Image" />
          </VAvatar>
          <VList>
            {items.map(item => (
              <VListTile ripple nativeOn-click={item.click}>
                <VListTileContent>
                  <VListTileTitle>{item.title}</VListTileTitle>
                </VListTileContent>
              </VListTile>
            ))}
          </VList>
        </VMenu>
      </VToolbar>
    );
  }
});
export default AppToolbar;
