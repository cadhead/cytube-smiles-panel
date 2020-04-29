import emotesPanelButton from "./templates/button"
import emotesPanel from "./templates/panel"

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

    this.panel = emotesPanel
    this.button = emotesPanelButton
  }

  append() {
    this.appendTo.button.appendChild(this.panel)
    this.appendTo.panel.appendChild(this.button)
  }
}

window.CytubeSmilesPanel = CytubeSmilesPanel
