import React from "react";
import "./BorrowList.css";

interface BorrowedItem {
  name: string;
  description: string;
  borrowedOn: string;
  returnBy: string;
}

interface BorrowListProps {
  borrowed: BorrowedItem[];
  editBorrow: (index: number, field: keyof BorrowedItem) => void;
  deleteBorrowed: (index: number) => void;
}

function BorrowList({ borrowed, editBorrow, deleteBorrowed }: BorrowListProps) {
  return (
    <div className="borrowlist-container">
      <ul>
        {borrowed.map((item, index) => (
          <li key={index} className="borrowlist-item">
            <p>Item {index + 1}: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Borrowed On: {item.borrowedOn}</p>
            <p>Return By: {item.returnBy}</p>
            <div>
              <button onClick={() => editBorrow(index, "name")}>Edit Name</button>
              <button onClick={() => editBorrow(index, "description")}>Edit Description</button>
              <button onClick={() => editBorrow(index, "borrowedOn")}>Edit Borrowed Date</button>
              <button onClick={() => editBorrow(index, "returnBy")}>Edit Return Date</button>
              <button onClick={() => deleteBorrowed(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BorrowList;
