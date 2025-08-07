import React, {
  useState,
  useEffect,
  type FC,
  type FormEvent,
} from "react";
import type { UserForm } from "../types/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FormProps {
  handleAdd: (newStudent: UserForm) => void;
  handleUpdate: (updatedStudent: UserForm) => void;
  editingStudent?: UserForm | null;
}

const initialState: Omit<UserForm, "id"> = {
  fullName: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "male",
};

const Form: FC<FormProps> = ({ handleAdd, handleUpdate, editingStudent }) => {
  const [formData, setFormData] = useState<Omit<UserForm, "id">>(initialState);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (editingStudent) {
      const { id, ...rest } = editingStudent;
      setFormData(rest);
    } else {
      setFormData(initialState);
    }
  }, [editingStudent]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-2xl rounded-xl px-8 py-10 w-full max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600">
        {editingStudent ? "Talabani tahrirlash" : "Yangi talaba qo‘shish"}
      </h2>

      <div className="space-y-4">
        <input
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
          type="text"
          placeholder="To‘liq ism"
          required
          className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email manzili"
          required
          className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />

        <div className="relative">
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Parol"
            required
            className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>

        <input
          value={formData.birthDate}
          onChange={handleChange}
          name="birthDate"
          type="date"
          required
          className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder:text-gray-400"
        />

        <select
          value={formData.gender}
          onChange={handleChange}
          name="gender"
          required
          className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2 text-gray-800 bg-white"
        >
          <option value="male">Erkak</option>
          <option value="female">Ayol</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold transition duration-300"
      >
        {editingStudent ? "Yangilash" : "Qo‘shish"}
      </button>
    </form>
  );
};

export default React.memo(Form);
