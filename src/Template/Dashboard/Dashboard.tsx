import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import React from "react";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

import { PageContainer, ProLayout } from "@ant-design/pro-layout";
import type { HeaderViewProps } from "@ant-design/pro-layout/es/components/Header";

type MenuItem = Required<MenuProps>["items"];

export interface avatarProps {
  img: string;
  name: string;
}

export interface DashboardProps extends PropsWithChildren<any> {
  title: string;
  logo: string;
  footertitle: string;
  headerTitleRender?: HeaderViewProps["headerTitleRender"];
  routes: MenuItem;
  pathname?: string;
  avatar?: avatarProps;
  menuVisible?: boolean;
  onClick: (path?: string) => void;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  title = "Admin Dashboard",
  logo = "https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ",
  headerTitleRender,
  footertitle = "© 2022 Made with Fun",
  pathname: orignPathname = "/",
  menuVisible = true,
  routes,
  onClick,
  children,
  ...props
}: DashboardProps) => {
  const [pathname, setPathname] = React.useState(orignPathname);
  useEffect(() => {
    setPathname(orignPathname);
  }, [orignPathname]);

  const items: MenuProps["items"] = [
    {
      label: (
        <a rel="退出登录" onClick={props.onLogout}>
          退出登录
        </a>
      ),
      key: "0",
    },
  ];

  return (
    <ProLayout
      token={{
        header: {
          heightLayoutHeader: 48,
        },
      }}
      title={title}
      logo={<img src={logo} className="h-8" />}
      headerTitleRender={headerTitleRender}
      fixSiderbar={true}
      layout={"mix"}
      menu={{
        autoClose: false,
        defaultOpenAll: true,
      }}
      route={{
        path: "/",
        routes: [...routes],
      }}
      menuRender={menuVisible ? undefined : false}
      location={{
        pathname,
      }}
      avatarProps={{
        src:
          props?.avatar?.img ??
          "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
        size: "small",
        title: (
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Space>{props?.avatar?.name}</Space>
          </Dropdown>
        ),
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [];
        // return [
        //   <InfoCircleFilled key="InfoCircleFilled" />,
        //   <QuestionCircleFilled key="QuestionCircleFilled" />,
        //   <GithubFilled key="GithubFilled" />,
        // ];
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <div
            style={{
              textAlign: "center",
              paddingBlockStart: 12,
            }}
          >
            <div>{footertitle}</div>
          </div>
        );
      }}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || "/");
            onClick(item.path || "/");
          }}
        >
          {dom}
        </a>
      )}
    >
      <PageContainer
        header={{
          title: "",
          breadcrumb: {},
        }}
        subTitle=""
        token={{
          paddingInlinePageContainerContent: 30,
        }}
      >
        <div
          style={{
            marginTop: "-16px",
            marginLeft: "-30px",
            marginRight: "-30px",
          }}
        >
          {children}
        </div>
      </PageContainer>
    </ProLayout>
  );
};
