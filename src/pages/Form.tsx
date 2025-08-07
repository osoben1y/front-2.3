import React, { useState, useEffect, type FC, type FormEvent } from "react";
import type { UserForm } from "../types/Form";

interface FormProps {
  handleAdd: (newStudent: UserForm) => void;
  handleUpdate: (updatedStudent: UserForm) => void;
  editingStudent?: UserForm | null;
}

const initialState: Omit<UserForm, "id"> = {
  name: "",
  age: "",
  address: "",
  salary: "",
  phone: "",
};

const Form: FC<FormProps> = ({ handleAdd, handleUpdate, editingStudent }) => {
  const [formData, setFormData] = useState<Omit<UserForm, "id">>(initialState);

  useEffect(() => {
    if (editingStudent) {
      const { id, ...rest } = editingStudent;
      setFormData(rest);
    } else {
      setFormData(initialState);
    }
  }, [editingStudent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingStudent) {
      handleUpdate({ id: editingStudent.id, ...formData });
    } else {
      handleAdd({ id: Date.now(), ...formData });
    }
    setFormData(initialState);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d8c9ae] to-[#575757] px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl shadow-2xl p-8 sm:p-10 transition-all duration-300 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">{editingStudent ? "Update User" : "Create User"}</h2>
        <div className="space-y-6">
          {['name', 'age', 'address', 'salary', 'phone'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                name={field}
                type={field === 'age' || field === 'salary' ? 'number' : 'text'}
                id={field}
                placeholder={`Enter ${field}`}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            </div>
          ))}
        </div>
        <button type="submit" className="mt-6 w-full bg-white/30 hover:bg-[#575757] text-black dark:text-white py-2 rounded-full font-semibold transition duration-300">
          {editingStudent ? "Update" : "Create"}
        </button>
      </form>
    </main>
  );
};

export default React.memo(Form);