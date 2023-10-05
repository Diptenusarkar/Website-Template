import React, { useState, useEffect, useContext } from "react";
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
} from "../../gql/generate/generated";
import { Table, notification } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import {
  DeleteFilled,
  EditOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import DrawerEdit from "../Drawer/Drawer";
import { TodoContext } from "../../context/TodoContext";

interface DataType {
  todo: string;
  status: number;
}

const TableTodos = () => {
  let { todoData, setTodoData } = useContext(TodoContext);

  const { data, loading, error } = useGetTodosQuery();
  const [deleteTodoMutation] = useDeleteTodoMutation();

  useEffect(() => {
    const fetchData = async () => {
      if (!loading && data) {
        setTodoData(data?.todos);
      }
    };

    fetchData();
  }, [data, loading]);
  console.log(todoData);

  const deleteTodo = async (id: any) => {
    try {
      await deleteTodoMutation({
        variables: {
          id: id,
        },
      });

      const filter = todoData?.filter((item: any) => {
        return item?.id !== id;
      });

      setTodoData(filter);

      notification?.success({ message: "Todo Delete", placement: "top" });
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    // console.log('params', pagination, filters, sorter, extra);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Items",
      dataIndex: "todo",
      sorter:(a,b)=>a?.todo?.localeCompare(b?.todo)
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Delete",
      dataIndex: "action",
    },
    {
      title: "Edit",
      dataIndex: "edit",
    },
  ];

  const dataTable = todoData?.map((item: any, index: any) => {
    return {
      id: item?.id,
      todo: item?.todo,
      status: item?.status,
      action: <DeleteFilled onClick={() => deleteTodo(item?.id)} />,
      edit: <DrawerEdit item={item} action="Update" />,
    };
  });

  return (
    <>
      <DrawerEdit action="create" />
      <div style={{padding:20}}>
      <Table columns={columns} dataSource={dataTable} onChange={onChange}  />
      </div>
    </>
  );
};

export default TableTodos;
