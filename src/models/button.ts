class Button {
  btn: any;

  constructor() {
    const root = document.querySelector("#root");
    const btn = root?.querySelector("#btn-toggle");
    console.log("🚀 ~ Button ~ constructor ~ btn:", { btn, root });
    this.btn = btn;
  }

  onclickBtn() {
    console.log("_____ed__");
    console.log(this.btn);
    this.btn?.addEventListener("click", () => {
      console.log(1);
    });
  }
}

const btn = new Button();
export default btn;
