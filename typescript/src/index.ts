import "./style.css"
import craftXIconSrc from "./craftx-icon.png"

craft.env.setListener((env) => {
  switch (env.colorScheme) {
    case "dark":
      document.body.classList.add("dark");
      break;
    case "light":
      document.body.classList.remove("dark");
      break;
  }
})

window.addEventListener("load", () => {
  const button = document.getElementById('btn-execute');

  button?.addEventListener("click", () => {
    const block = craft.blockFactory.textBlock({
      content: "Hello world!"
    });

    craft.dataApi.addBlocks([block]);
  })
  const logoImg = document.getElementById('craftx-logo') as HTMLImageElement
  logoImg.src = craftXIconSrc;
})
