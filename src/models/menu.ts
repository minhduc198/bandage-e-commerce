class Menu {
  hamburgerMenu: Element | null;
  menuMobile: Element | null;
  outsideMenu: Element | null;

  constructor() {
    this.hamburgerMenu = document.querySelector(".hamburger-menu");
    this.menuMobile = document.querySelector(".menu-mobile");
    this.outsideMenu = document.querySelector("#root");
  }

  openMenu() {
    this.hamburgerMenu?.addEventListener("click", () => {
      this.menuMobile?.classList.remove("-mt-[392px]");
      this.menuMobile?.classList.remove("opacity-0");
    });
  }

  closeMenu() {
    this.outsideMenu?.addEventListener("click", () => {
      this.menuMobile?.classList.add("-mt-[392px]");
      this.menuMobile?.classList.add("opacity-0");
    });
  }
}

const menu = new Menu();
export default menu;
