import React, { useState, useRef, useContext } from "react";
import { Button, Drawer, Input, Select, notification } from "antd";
import { EditFilled, PlusCircleFilled } from "@ant-design/icons";
import type { InputRef } from "antd";
import { TodoContext } from "../../context/TodoContext";
import {
  useUpdateTodoMutation,
  useCreateTodoMutation,
} from "../../gql/generate/generated";
interface PropsType {
  item?: any;
  action: String;
}
const DrawerEdit: React.FC<PropsType> = ({ item, action }) => {
  let index = 0;
  const [open, setOpen] = useState(false);
  const [updateTodoMutation] = useUpdateTodoMutation();
  const [createTodoMutation] = useCreateTodoMutation();
  let { todoData, setTodoData } = useContext(TodoContext);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [items, setItems] = useState(["complete", "uncomplete"]);
  const [name, setName] = useState<any>(item?.status);
  const [todo, setTodo] = useState<any>(item?.todo);
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event);
  };

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const handleUpdate = () => {
    try {
      updateTodoMutation({
        variables: {
          input: {
            id: item?.id,
            todo: todo,
            status: name,
          },
        },
      });
      setOpen(false);
      notification?.success({
        message: "Todo updated Successfully",
        placement: "top",
      });
    } catch (e) {
      console.log("Error:", e);
    }
  };
  const handleCreate = () => {
    try {
      createTodoMutation({
        variables: {
          input: {
            todo: todo,
            status: name,
          },
        },
      }).then((res) => {
        console.log(res);
        let newTodo = {
          id: res?.data?.createTodo?.id,
          todo: res?.data?.createTodo?.todo,
          status: res?.data?.createTodo?.status,
        };
        setTodoData([...todoData, newTodo]);
      });
      setOpen(false);
     
      notification?.success({
        message: "Todo Created Successfully",
        placement: "top",
      });
    } catch (e) {
      console.log("Error:", e);
    }
  };
  return (
    <>
      {action == "Update" ? (
        <>
          <EditFilled onClick={showDrawer} />
          <Drawer
            title="Edit Your Task"
            placement="left"
            onClose={onClose}
            open={open}
          >
            <Input
              placeholder="Edit Task"
              defaultValue={item?.todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Select
              style={{ width: 330, marginTop: 20 }}
              placeholder="Task Status"
              dropdownRender={(menu) => <>{menu}</>}
              defaultValue={item?.status}
              onChange={onNameChange}
              options={items.map((item) => ({ label: item, value: item }))}
            />
            <div
              style={{ display: "flex", justifyContent: "end", marginTop: 15 }}
            >
              <Button
                type="primary"
                shape="round"
                size="middle"
                onClick={handleUpdate}
              >
                Save
              </Button>
            </div>
          </Drawer>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              margin: "20px 20px 20px 0px",
            }}
          >
            <Button
              type="primary"
              shape="round"
              icon={<PlusCircleFilled />}
              size={"middle"}
              onClick={showDrawer}
            >
              Create
            </Button>
          </div>
          <Drawer
            title="Create Your Task"
            placement="left"
            onClose={onClose}
            open={open}
          >
            <Input
              placeholder="Create Task"
              onChange={(e) => setTodo(e.target.value)}
            />
            <Select
              style={{ width: 330, marginTop: 20 }}
              placeholder="Task Status"
              dropdownRender={(menu) => <>{menu}</>}
              onChange={onNameChange}
              options={items.map((item) => ({ label: item, value: item }))}
            />
            <div
              style={{ display: "flex", justifyContent: "end", marginTop: 15 }}
            >
              <Button
                type="primary"
                shape="round"
                size="middle"
                onClick={handleCreate}
              >
                Create
              </Button>
            </div>
          </Drawer>
        </>
      )}
    </>
  );
};

export default DrawerEdit;
