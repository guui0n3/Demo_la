import type { PropsWithChildren } from "react";
import React, { useEffect } from "react";
import { Button, Drawer as AntdDrawer, Space } from "antd";

import _ from "lodash";

export interface DrawerProps extends PropsWithChildren<any> {
  title: string;
  size?: number;
  onClose: () => void;
  // open:boolean
}

export const Drawer = ({ children, ...props }: DrawerProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  function onClose() {
    setIsModalOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  }
  // useEffect(()=>{
  //   setIsModalOpen(props.open)
  // },[props.open])

  return (
    <AntdDrawer
      title={props.title}
      // size="large"
      placement="right"
      width={props.size || 736}
      onClose={onClose}
      destroyOnClose
      open={isModalOpen}
      extra={
        <Space>
          <Button onClick={onClose}>关闭</Button>
        </Space>
      }
    >
      {children}
    </AntdDrawer>
  );
};
