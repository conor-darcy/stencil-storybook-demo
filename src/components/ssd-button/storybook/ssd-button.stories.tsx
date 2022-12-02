import { html } from "lit-html";
import "./story-styles.css";

interface storyArgs {
  accent: string;
  slot: string;
  disabled: boolean;
}

export default {
  title: "Components/Button",
  component: "ssd-button",
  parameters: { actions: { handles: ["sdd_ButtonClick ssd-button"] } },
};

const Template = ({ accent, slot, disabled }: storyArgs) =>
  html`<ssd-button accent=${accent} ?disabled=${disabled}>${slot}</ssd-button>`;

export const Example = Template.bind({});
Example.args = {
  accent: "primary",
  slot: "Click me",
  disabled: false,
};
