
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import type { ModelProps as ComponentProps } from "./index";
import { Model as Component } from "./index";

const meta: Meta<typeof Component> = {
  title: "Atomic/PopupMode/Modal",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const create: Story = {
  args: {
    title: "large",
    size: "large",
  },
};
