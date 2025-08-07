import React, {
  useState,
  useEffect,
  type FC,
  type FormEvent,
} from "react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl backdrop-blur-lg bg-white/30 shadow-2xl rounded-xl px-8 py-10 space-y-6 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center text-black">
          {editingStudent ? "Update User" : "Create User"}
        </h2>

        <div className="space-y-4">
          <input
            value={formData.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-black placeholder:text-gray-400 focus:border-white outline-none py-2"
          />

          <input
            value={formData.age}
            onChange={handleChange}
            name="age"
            type="number"
            placeholder="Age"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-black placeholder:text-gray-400 focus:border-white outline-none py-2"
          />

          <input
            value={formData.address}
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Address"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-black placeholder:text-gray-400 focus:border-white outline-none py-2"
          />

          <input
            value={formData.salary}
            onChange={handleChange}
            name="salary"
            type="number"
            placeholder="Salary"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-black placeholder:text-gray-400 focus:border-white outline-none py-2"
          />

          <input
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            type="tel"
            placeholder="Phone number"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-black placeholder:text-gray-400 focus:border-white outline-none py-2"
          />

        </div>

        <button
          type="submit"
          className="w-full bg-white/30 hover:bg-[#575757] text-black py-2 rounded-full font-semibold transition duration-300"
        >
          {editingStudent ? "Update" : "Create"}
        </button>
      </form>
    </main>
  );
};

export default React.memo(Form);
