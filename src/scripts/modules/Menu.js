class Menu {
  //1.Constructor.
  constructor() {
    this.headerNav = document.querySelector(".header_nav")
    this.headerLang = document.querySelector(".header_lang")
    this.navCta = document.querySelector(".nav_cta")
    this.menuBtn = document.querySelector(".menu")
    if (this.headerNav.length == false || this.menuBtn.length == false) {
      return false
    }

    this.events()
  }

  //2.Events.
  events() {
    this.menuBtn.addEventListener("click", this.toggleMenu.bind(this))
    window.addEventListener("resize", this.handleResizeScreen.bind(this))
  }

  //3.Actions.
  toggleMenu() {
    this.headerNav.classList.toggle("showmenu")
    this.headerLang.classList.toggle("display-block")
    this.navCta.classList.toggle("display-block")
  }

  handleResizeScreen() {
    if (window.innerWidth > 1109) {
      this.headerNav.classList.remove("showmenu")
      this.headerLang.classList.remove("display-block")
      this.navCta.classList.remove("display-block")
    }
  }
}

export default Menu
