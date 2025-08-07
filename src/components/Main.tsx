import React, { useEffect, useState, useCallback } from "react";
import Form from "./Form";
import Teacher from "./Teacher";
import type { ITeacherType } from "../types/types";

const Main = () => {
  const [teacherList, setTeacherList] = useState<ITeacherType[]>(() => {
    const saved = localStorage.getItem("teacher-data");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentlyEditing, setCurrentlyEditing] = useState<ITeacherType | null>(null);

  useEffect(() => {
    localStorage.setItem("teacher-data", JSON.stringify(teacherList));
  }, [teacherList]);

  const handleDelete = useCallback((id: number) => {
    setTeacherList((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <main className="min-h-screen pb-20 bg-gradient-to-br from-[#e2f3f4] to-[#6dc7d1]">
      <Form
        updateList={setTeacherList}
        itemToEdit={currentlyEditing}
        clearEdit={setCurrentlyEditing}
      />
      <Teacher
        data={teacherList}
        onDelete={handleDelete}
        setEditingItem={setCurrentlyEditing}
      />
    </main>
  );
};

export default React.memo(Main);
