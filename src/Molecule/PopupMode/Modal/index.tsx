import type { PropsWithChildren } from "react";
import React, { useEffect } from "react";
import { Button, Modal, Space } from "antd";

import _ from "lodash";

export interface ModelProps extends PropsWithChildren<any> {
  title: string;
  size?: "default" | "large";
  onCancel: () => void;
  onOk: () => void;
  // open:boolean
}

export const Model = ({ children, ...props }: ModelProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  function onCancel() {
    setIsModalOpen(false);
    if (props.onCancel) {
      props.onCancel();
    }
  }
  function onOk() {
    props.onOk();
  }

  return (
    <Modal
      title={props.title}
      // size="large"
      width={props.size == "large" ? 1024 : 736}
      destroyOnClose
      open={isModalOpen}
      footer={null}
      onCancel={onCancel}
      // onOk={onOk}
      // okText="确认"
      // cancelText="取消"
    >
      {children}
    </Modal>
  );
};
