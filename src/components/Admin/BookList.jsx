import React from "react";

const BookList = () => {
  // Assuming you have an array of book objects named 'books'
  const books = [
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      price: 12.99,
      categories: ["Fantasy", "Adventure"],
    },
    {
      // We can keep this one for demonstration purposes
      name: "Pride and Prejudice",
      price: 9.99,
      categories: ["Romance", "Fiction"],
    },
    {
      name: "To Kill a Mockingbird",
      price: 8.5,
      categories: ["Fiction", "Classics"],
    },
    {
      name: "A Brief History of Time",
      price: 14.95,
      categories: ["Science", "Non-Fiction"],
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      price: 10.5,
      categories: ["Fantasy", "Children"],
    },
  ];

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Book Name</th>
          <th scope="col">Book Price</th>
          <th scope="col">Categories</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{book.name}</td>
            <td>{book.price}</td>

            <td>{book.categories && book.categories.join(", ")}</td>
            <td>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-danger">
                  Edit
                </button>
                <button type="button" class="btn btn-warning">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
