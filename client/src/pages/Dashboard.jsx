import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import { getActionLabel } from "../helpers/getActionLabel";
import BookForm from "../components/books/BookForm";
import BookManagementTitle from "../components/books/BookManagementTitle";
import BooksTable from "../components/books/BooksTable";
import AuthHeader from "../components/auth/AuthHeader";
import { useBooks } from "../hooks/useBooks";
import { useBookForm } from "../hooks/useBookForm";
import { Navigate } from "react-router-dom";

const Dashboard = () => {

  const isAuthenticated = JSON.parse(localStorage.getItem("user"))
  console.log(isAuthenticated,"isauth")

  if(!isAuthenticated){
    return <Navigate to="/" replace/>
  }
  const { books, isLoading, handleAddBook, handleDeleteBook } = useBooks();
  const { book, errors, handleInputChange, resetForm, validateForm, setBook } =
    useBookForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setBook({ title: book.title, author: book.author, genre: book.genre });
    setIsModalOpen(true);
  };

  const handleAddbook = () => {
    resetForm();
    setEditingBook(null);
    setIsModalOpen(true);
  };

  const handleSaveBook = async () => {
    if (!validateForm()) return;
    await handleAddBook(book, editingBook);
    handleCloseModal();
  };

  
  return (
    <div className="p-8">
      <AuthHeader />
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
        title={editingBook ? "Edit Book" : "Add New Book"}
        onClose={handleCloseModal}
        onAction={handleSaveBook}
        isLoading={isLoading}
        actionLabel={getActionLabel(isLoading, editingBook)}
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