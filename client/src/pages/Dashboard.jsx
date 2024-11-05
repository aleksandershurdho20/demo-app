import { Loader2, X } from "lucide-react";
import React, { useState } from "react";
import { validateFields } from "../helpers/validations";
import Modal from "../components/modal/Modal";
import { getActionLabel } from "../helpers/getActionLabel";
import BookForm from "../components/books/BookForm";
import BookManagementTitle from "../components/books/BookManagementTitle";
import BooksTable from "../components/books/BooksTable";

const Dashboard = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "John Doe", description: "john@example.com", isbn: "Admin" },
    { id: 2, title: "Jane Smith", description: "jane@example.com", isbn: "User" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [errors, setErrors] = useState({});
  const [book, setBook] = useState({
    title: "",
    description: "",
    isbn: "",
  });

  const resetForm = () => {
    setBook({ name: "", email: "", role: "" });
    setEditingUser(null);
    setErrors({});
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const validateForm = () => {
    const newErrors = validateFields(book);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAddUser = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (editingUser) {
        setBooks((prev) =>
          prev.map((user) =>
            user.id === editingUser.id ? { ...book, id: user.id } : user,
          ),
        );
      } else {
        setBooks((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            ...book,
          },
        ]);
      }
      handleCloseModal();
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditBook = (book) => {
    setEditingUser(book);
    setBook({
      title: book.title,
      description: book.description,
      isbn: book.isbn,
    });
    setIsModalOpen(true);
  };

  const handleDeleteBook = async (userId) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBooks((prev) => prev.filter((user) => user.id !== userId));
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddbook = () => {
    resetForm();
    setIsModalOpen(true);
  };
  return (
    <div className="p-8">
      <BookManagementTitle isLoading={isLoading} onClick={handleAddbook} />

      <div className="border rounded-lg overflow-hidden">
        <BooksTable
          books={books}
          handleEditBook={handleEditBook}
          handleDeleteBook={handleDeleteBook}
          isLoading={isLoading}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        title={editingUser ? "Edit book" : "Add New book"}
        onClose={handleCloseModal}
        onAction={handleAddUser}
        isLoading={isLoading}
        actionLabel={getActionLabel(isLoading,editingUser)}
      >
        <BookForm
          book={book}
          errors={errors}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;