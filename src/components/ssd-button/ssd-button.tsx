import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "ssd-button",
  styleUrl: "ssd-button.css",
  shadow: true,
})
export class SsdButton {
  @Prop() accent: "primary" | "secondary" | "ghost" | "destructive";
  @Prop() disabled: boolean = false;

  @Event() sdd_ButtonClick: EventEmitter;

  render() {
    return (
      <button
        class={`accent-${this.accent}`}
        disabled={this.disabled}
        onClick={(e) => this.handleClick(e)}
      >
        <slot></slot>
      </button>
    );
  }
  handleClick(e) {
    this.sdd_ButtonClick.emit({ e });
    console.log(e);
  }
}
