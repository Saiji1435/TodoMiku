import React, { useState } from "react";
import "./Form.css";

interface BorrowedItem {
  name: string;
  description: string;
  borrowedOn: string;
  returnBy: string;
}

interface BorrowFormProps {
  setBorrowed: React.Dispatch<React.SetStateAction<BorrowedItem[]>>;
}

function BorrowForm({ setBorrowed }: BorrowFormProps) {
  const [item, setItem] = useState<Omit<BorrowedItem, "borrowedOn" | "returnBy">>({
    name: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item.name || !item.description) return;

    const now = new Date();
    const borrowedOn = now.toLocaleDateString();
    const returnBy = new Date(now.setDate(now.getDate() + 7)).toLocaleDateString();

    const newItem: BorrowedItem = {
      ...item,
      borrowedOn,
      returnBy,
    };

    setBorrowed((prev) => [...prev, newItem]);
    setItem({ name: "", description: "" });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>📦 Add Borrowed Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={item.description}
        onChange={(e) => setItem({ ...item, description: e.target.value })}
      />
      <button type="submit">➕ Add Item</button>
    </form>
  );
}

export default BorrowForm;
