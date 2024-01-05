import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import type { DrawerProps as ComponentProps } from "./index";
import { Drawer as Component } from "./index";

const meta: Meta<typeof Component> = {
  title: "Atomic/PopupMode/Drawer",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const create: Story = {
  args: {
    title: "test",
  },
};
