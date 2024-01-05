import React from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { Meta, StoryObj } from "@storybook/react";

import { Pagination as Component } from "./index";
import { Button } from "antd";

const meta: Meta<typeof Component> = {
  title: "Molecules/Pagination",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Pagination: Story = {
  args: {
    value: {
      total: 500,
    },
  },
};
