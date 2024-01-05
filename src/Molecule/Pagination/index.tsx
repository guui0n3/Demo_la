import type { PropsWithChildren } from "react";
import React from "react";

import { z } from "zod";
import { Pagination as AntdPagination } from "antd";

export const PaginationSchema = z.object({
  total: z.number().default(0),
  pageSize: z.number().default(100),
  page: z.number().default(0),
});

export type PaginationType = z.infer<typeof PaginationSchema>;

export interface PaginationProps extends PropsWithChildren<any> {
  value: PaginationType;
  onChange: (page: number, pageSize: number) => void;
}

export const Pagination = ({ children, ...props }: PaginationProps) => {
  const [total, setTotal] = React.useState(props.value?.total);
  const [page, setPage] = React.useState(props.value?.page);
  const [pageSize, setPageSize] = React.useState(props.value?.pageSize || 10);
  React.useEffect(() => {
    // setData(props.value);
    setTotal(props.value?.total);
    setPage(props.value?.page);
    setPageSize(props.value?.pageSize || 10);
  }, [props.value]);

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0" }}
    >
      <AntdPagination
        size="small"
        total={total}
        showSizeChanger
        showQuickJumper
        current={page}
        pageSize={pageSize}
        showTotal={(total) => `共 ${total} 条`}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
          props.onChange(page, pageSize);
        }}
      ></AntdPagination>
    </div>
  );
};
