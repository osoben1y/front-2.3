import React, { type FC, type Dispatch, type SetStateAction } from "react";
import type { ITeacherType } from "../types/types";
import maleAvatar from "../assets/male.png";
import femaleAvatar from "../assets/female.png";

interface Props {
  data: ITeacherType[];
  onDelete: (id: number) => void;
  setEditingItem: Dispatch<SetStateAction<ITeacherType | null>>;
}

const Teacher: FC<Props> = ({ data, onDelete, setEditingItem }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-10 mt-12">
      {data?.map((profile) => {
        const profileImage = profile.gender === "male" ? maleAvatar : femaleAvatar;

        return (
          <div
            key={profile.id}
            className="bg-gradient-to-br from-[#d8c9ae] to-[#575757] text-[#1c2529] shadow-2xl rounded-3xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={profileImage}
              alt={profile.gender}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#a1d1b1] shadow-md mb-4"
            />
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-sm">Yosh: {profile.age}</p>
              <p className="text-sm">Manzil: {profile.address}</p>
              <p className="text-sm">Maosh: {profile.salary} so'm</p>
              <p className="text-sm">Telefon: {profile.phone}</p>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setEditingItem(profile)}
                className="px-4 py-1 text-sm bg-[#a1d1b1] hover:bg-[#8fbfa1] text-[#1c2529] rounded-full font-medium transition duration-300"
              >
                ✏️ Tahrirlash
              </button>
              <button
                onClick={() => onDelete(profile.id)}
                className="px-4 py-1 text-sm bg-red-400 hover:bg-red-500 text-white rounded-full font-medium transition duration-300"
              >
                🗑 O‘chirish
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Teacher);
