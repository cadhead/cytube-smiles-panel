class CytubeSmilesPanel {
  constructor(config) {
    Object.assign({
      className: {
        button: "",
        panel: ""
      },
      appendTo: {
        button: document.querySelector("#leftcontrols"),
        panel: document.querySelector("#leftpane-inner")
      }
    }, config)

    this.append()
  }
}

window.CytubeSmilesPanel = CytubeSmilesPanel