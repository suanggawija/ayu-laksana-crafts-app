import React from "react";

const SidebarCategory = () => (
  <div className="bg-white p-4 rounded-lg shadow-md sticky top-18">
    <h2 className="text-lg font-semibold text-gray-900 mb-2">Kategori</h2>
    <ul className="space-y-2">
      {["Kategori 1", "Kategori 2", "Kategori 3", "Kategori 4"].map((cat) => (
        <li
          key={cat}
          className="text-gray-700 hover:text-blue-600 cursor-pointer"
        >
          {cat}
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarCategory;
