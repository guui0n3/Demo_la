import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from "@ant-design/icons";

import type { DashboardProps as ComponentProps } from "./Dashboard";
import { Dashboard as Component } from "./Dashboard";

const meta: Meta<typeof Component> = {
  title: "Template/Dashboard",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Dashboard: Story = {
  args: {
    title: "Admin Dashboard",
    logo: "https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ",
    footertitle: "© 2022 Made with Fun.",
    avatar: {
      name: "张三",
      img: "https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ",
    },
    onLogout: () => {
      console.log("logout");
    },
    children: (
      <div className=" h-screen border border-red-200 border-solid">
        <Button type="primary">456</Button>
        <Button>789</Button>
        <br></br> <br></br>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button icon={<SearchOutlined />} href="https://www.google.com" />
        <br />
        <br />
        <Tooltip title="search">
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            size="large"
          />
        </Tooltip>
        <Button type="primary" shape="circle" size="large">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>
        <Button icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <br />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>
        <Button icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <Tooltip title="search">
          <Button
            type="dashed"
            shape="circle"
            icon={<SearchOutlined />}
            size="large"
          />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <Button
          icon={<SearchOutlined />}
          size="large"
          href="https://www.google.com"
        />
      </div>
    ),
    onClick: (key: string) => {
      console.log(key);
    },
    pathname: "/list/sub-page/sub-sub-page2",
    routes: [
      {
        path: "/welcome",
        name: "欢迎",
        icon: <SmileFilled />,
      },
      {
        path: "/admin",
        name: "管理页",
        icon: <CrownFilled />,
        children: [
          {
            path: "/admin/sub-page1",
            name: "一级页面",
            icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
          },
          {
            path: "/admin/sub-page2",
            name: "二级页面",
            icon: <CrownFilled />,
          },
          {
            path: "/admin/sub-page3",
            name: "三级页面",
            icon: <CrownFilled />,
          },
        ],
      },
      {
        name: "列表页",
        icon: <TabletFilled />,
        path: "/list",
        children: [
          {
            path: "/list/sub-page",
            name: "列表页面",
            icon: <CrownFilled />,
            children: [
              {
                path: "/list/sub-page/sub-sub-page1",
                name: "一一级列表页面",
                icon: <CrownFilled />,
              },
              {
                path: "/list/sub-page/sub-sub-page2",
                name: "一二级列表页面",
                icon: <CrownFilled />,
              },
              {
                path: "/list/sub-page/sub-sub-page3",
                name: "一三级列表页面",
                icon: <CrownFilled />,
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "二级列表页面",
            icon: <CrownFilled />,
          },
          {
            path: "/list/sub-page3",
            name: "三级列表页面",
            icon: <CrownFilled />,
          },
        ],
      },
    ],
  },
};
export const DashboardLogo: Story = {
  args: {
    title: "智慧计算底座",
    logo: "http://10.10.22.41/assets/logo-d46fb915.png",
    footertitle: "© 2022 Made with Fun.",
    avatar: {
      name: "张三",
      img: "https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ",
    },
    headerTitleRender: (logo, title) => {
      return (
        <div
          style={{
            height: "32px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {logo}
          <span
            style={{ fontSize: "16px", fontWeight: "700", color: "#0960bd" }}
          >
            {title?.props?.children}
          </span>
          <span style={{ color: "red", fontSize: "14px" }}>
            非密系统，禁止处理涉密数据
          </span>
        </div>
      );
    },
    onLogout: () => {
      console.log("logout");
    },
    children: (
      <div className=" h-screen border border-red-200 border-solid">
        <Button type="primary">456</Button>
        <Button>789</Button>
        <br></br> <br></br>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title="search">
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button icon={<SearchOutlined />} href="https://www.google.com" />
        <br />
        <br />
        <Tooltip title="search">
          <Button
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
            size="large"
          />
        </Tooltip>
        <Button type="primary" shape="circle" size="large">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>
        <Button icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <br />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} size="large" />
        </Tooltip>
        <Button icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <Tooltip title="search">
          <Button
            type="dashed"
            shape="circle"
            icon={<SearchOutlined />}
            size="large"
          />
        </Tooltip>
        <Button type="dashed" icon={<SearchOutlined />} size="large">
          Search
        </Button>
        <Button
          icon={<SearchOutlined />}
          size="large"
          href="https://www.google.com"
        />
      </div>
    ),
    onClick: (key: string) => {
      console.log(key);
    },
    pathname: "/list/sub-page/sub-sub-page2",
    routes: [
      {
        path: "/welcome",
        name: "欢迎",
        icon: <SmileFilled />,
      },
      {
        path: "/admin",
        name: "管理页",
        icon: <CrownFilled />,
        children: [
          {
            path: "/admin/sub-page1",
            name: "一级页面",
            icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
          },
          {
            path: "/admin/sub-page2",
            name: "二级页面",
            icon: <CrownFilled />,
          },
          {
            path: "/admin/sub-page3",
            name: "三级页面",
            icon: <CrownFilled />,
          },
        ],
      },
      {
        name: "列表页",
        icon: <TabletFilled />,
        path: "/list",
        children: [
          {
            path: "/list/sub-page",
            name: "列表页面",
            icon: <CrownFilled />,
            children: [
              {
                path: "/list/sub-page/sub-sub-page1",
                name: "一一级列表页面",
                icon: <CrownFilled />,
              },
              {
                path: "/list/sub-page/sub-sub-page2",
                name: "一二级列表页面",
                icon: <CrownFilled />,
              },
              {
                path: "/list/sub-page/sub-sub-page3",
                name: "一三级列表页面",
                icon: <CrownFilled />,
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "二级列表页面",
            icon: <CrownFilled />,
          },
          {
            path: "/list/sub-page3",
            name: "三级列表页面",
            icon: <CrownFilled />,
          },
        ],
      },
    ],
  },
};
