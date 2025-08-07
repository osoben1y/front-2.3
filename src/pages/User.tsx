import React, { type FC, type Dispatch, type SetStateAction } from "react";
import type { UserForm } from "../types/Form";

interface Props {
  data: UserForm[];
  onDelete: (id: number) => void;
  setEditingItem: Dispatch<SetStateAction<UserForm | null>>;
}

const UserView: FC<Props> = ({ data, onDelete, setEditingItem }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((user: UserForm) => (
        <div key={user.id} className="rounded-2xl shadow-xl backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/20 p-6 transition hover:scale-[1.02] hover:shadow-2xl">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{user.name}</h2>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li><span className="font-medium">Age:</span> {user.age}</li>
            <li><span className="font-medium">Address:</span> {user.address}</li>
            <li><span className="font-medium">Salary:</span> ${user.salary}</li>
            <li><span className="font-medium">Phone:</span> {user.phone}</li>
          </ul>
          <div className="mt-4 flex justify-between">
            <button onClick={() => setEditingItem(user)} className="px-4 py-1 text-sm bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-medium rounded-full transition">Update</button>
            <button onClick={() => onDelete(user.id)} className="px-4 py-1 text-sm bg-red-400 hover:bg-red-500 text-white font-medium rounded-full transition">Delete</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default React.memo(UserView);