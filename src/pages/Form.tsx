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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d8c9ae] to-[#575757] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl backdrop-blur-lg bg-white/30 shadow-2xl rounded-xl px-8 py-10 space-y-6 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 drop-shadow-md">
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
            className="w-full border-b-2 border-white/30 bg-transparent text-white placeholder:text-white/70 focus:border-indigo-300 outline-none py-2"
          />

          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email manzili"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-white placeholder:text-white/70 focus:border-indigo-300 outline-none py-2"
          />

          <div className="relative">
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Parol"
              required
              className="w-full border-b-2 border-white/30 bg-transparent text-white placeholder:text-white/70 focus:border-indigo-300 outline-none py-2 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <input
            value={formData.birthDate}
            onChange={handleChange}
            name="birthDate"
            type="date"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-white placeholder:text-white/70 focus:border-indigo-300 outline-none py-2"
          />

          <select
            value={formData.gender}
            onChange={handleChange}
            name="gender"
            required
            className="w-full border-b-2 border-white/30 bg-transparent text-white placeholder:text-white/70 focus:border-indigo-300 outline-none py-2"
          >
            <option className="text-black" value="male">Erkak</option>
            <option className="text-black" value="female">Ayol</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold transition duration-300"
        >
          {editingStudent ? "Yangilash" : "Qo‘shish"}
        </button>
      </form>
    </main>
  );
};

export default React.memo(Form);
