import React, {
  type FC,
  type FormEvent,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { ITeacherType } from "../types/types";

interface Props {
  updateList: Dispatch<SetStateAction<ITeacherType[]>>;
  itemToEdit: ITeacherType | null;
  clearEdit: Dispatch<SetStateAction<ITeacherType | null>>;
}

const Form: FC<Props> = ({ updateList, itemToEdit, clearEdit }) => {
  const [nameInput, setNameInput] = useState("");
  const [yearsOld, setYearsOld] = useState("");
  const [location, setLocation] = useState("");
  const [monthlyPay, setMonthlyPay] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [genderSelect, setGenderSelect] = useState<"male" | "female">("male");

  useEffect(() => {
    if (itemToEdit) {
      setNameInput(itemToEdit.name);
      setYearsOld(itemToEdit.age);
      setLocation(itemToEdit.address);
      setMonthlyPay(itemToEdit.salary);
      setContactNumber(itemToEdit.phone);
      setGenderSelect(itemToEdit.gender);
    }
  }, [itemToEdit]);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const teacherProfile: ITeacherType = {
      id: itemToEdit ? itemToEdit.id : Date.now(),
      name: nameInput,
      age: yearsOld,
      address: location,
      salary: monthlyPay,
      phone: contactNumber,
      gender: genderSelect,
    };

    if (itemToEdit) {
      updateList((prev) =>
        prev.map((t) => (t.id === itemToEdit.id ? teacherProfile : t))
      );
      clearEdit(null);
    } else {
      updateList((prev) => [...prev, teacherProfile]);
    }

    // Reset form
    setNameInput("");
    setYearsOld("");
    setLocation("");
    setMonthlyPay("");
    setContactNumber("");
    setGenderSelect("male");
  };

  return (
    <form
      onSubmit={handleSave}
      className="w-full max-w-2xl mx-auto mt-10 bg-gradient-to-r from-[#d8c9ae] to-[#575757] shadow-2xl rounded-3xl px-8 py-10 space-y-6 text-[#1c2529]"
    >
      <h2 className="text-3xl font-bold text-center text-[#1c2529] drop-shadow-sm">
        O'qituvchi Ma'lumotlari
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Ism"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          required
          className="bg-white/90 placeholder:text-gray-500 border-2 border-transparent focus:border-[#a1d1b1] rounded-xl px-4 py-2 outline-none"
        />

        <input
          type="number"
          placeholder="Yosh"
          value={yearsOld}
          onChange={(e) => setYearsOld(e.target.value)}
          required
          className="bg-white/90 placeholder:text-gray-500 border-2 border-transparent focus:border-[#a1d1b1] rounded-xl px-4 py-2 outline-none"
        />

        <input
          type="text"
          placeholder="Manzil"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="bg-white/90 placeholder:text-gray-500 border-2 border-transparent focus:border-[#a1d1b1] rounded-xl px-4 py-2 outline-none"
        />

        <input
          type="number"
          placeholder="Maosh"
          value={monthlyPay}
          onChange={(e) => setMonthlyPay(e.target.value)}
          required
          className="bg-white/90 placeholder:text-gray-500 border-2 border-transparent focus:border-[#a1d1b1] rounded-xl px-4 py-2 outline-none"
        />

        <input
          type="text"
          placeholder="Telefon"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
          className="bg-white/90 placeholder:text-gray-500 border-2 border-transparent focus:border-[#a1d1b1] rounded-xl px-4 py-2 outline-none"
        />

        <div className="flex items-center gap-4 bg-white/90 px-4 py-2 rounded-xl">
          <label className="font-medium text-sm">Jinsi:</label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={genderSelect === "male"}
              onChange={() => setGenderSelect("male")}
            />
            <span>Erkak</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={genderSelect === "female"}
              onChange={() => setGenderSelect("female")}
            />
            <span>Ayol</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#1c2529] text-[#a1d1b1] hover:bg-[#333] rounded-xl font-semibold tracking-wide transition duration-300"
      >
        {itemToEdit ? "Tahrirlashni saqlash" : "Qo‘shish"}
      </button>
    </form>
  );
};

export default React.memo(Form);
