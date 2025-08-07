import React, { useState, useEffect, useCallback } from "react";
import type { UserForm } from "../types/Form";
import Form from "./Form";
import UserView from "./User";

const Home = () => {
  const [users, setUsers] = useState<UserForm[]>(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [editingUser, setEditingUser] = useState<UserForm | null>(null);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(users));
  }, [users]);

  const handleAdd = useCallback((newUser: UserForm) => {
    setUsers((prev) => [...prev, newUser]);
  }, []);

  const handleUpdate = useCallback((updatedUser: UserForm) => {
    setUsers((prev) => prev.map((user) => user.id === updatedUser.id ? updatedUser : user));
    setEditingUser(null);
  }, []);

  const handleDelete = useCallback((id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }, []);

  return (
    <>
      <Form handleAdd={handleAdd} handleUpdate={handleUpdate} editingStudent={editingUser} />
      <UserView data={users} onDelete={handleDelete} setEditingItem={setEditingUser} />
    </>
  );
};

export default React.memo(Home);