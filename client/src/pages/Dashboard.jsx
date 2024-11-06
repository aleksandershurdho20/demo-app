import React, { useEffect, useState } from "react";
import { validateFields } from "../helpers/validations";
import Modal from "../components/modal/Modal";
import { getActionLabel } from "../helpers/getActionLabel";
import BookForm from "../components/books/BookForm";
import BookManagementTitle from "../components/books/BookManagementTitle";
import BooksTable from "../components/books/BooksTable";
import AuthHeader from "../components/auth/AuthHeader";
import { apiInstance } from "../utils/api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [errors, setErrors] = useState({});
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
  });

  useEffect(() => {
    apiInstance.get("books").then(res => {
      console.log(res.data,"?")
      setBooks(res.data)
    })
  },[])
  const resetForm = () => {
    setBook({ title: "", author: "", genre: "" });
    setEditingBook(null);
    setErrors({});
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const validateForm = () => {
    const newErrors = validateFields(book);
    console.log(newErrors,book)
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

      if (editingBook) {
        apiInstance.put(`/book/${editingBook._id}`,book)
        setBooks((prev) =>
          prev.map((user) =>
            user._id === editingBook._id ? { ...book, _id: user._id } : user,
          ),
        );
        toast.success("Book updated succesfully")
      } else {
        const {data } = await apiInstance.post("create",{...book,user:JSON.parse(localStorage.getItem("user"))._id})
        toast.success("Book created succesfully!")
        setBooks((prev) => [
          ...prev,
          {
            _id: data._id,
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
    setEditingBook(book);
    setBook({
      title: book.title,
      author: book.author,
      genre: book.genre,
    });
    setIsModalOpen(true);
  };

  const handleDeleteBook = async (id) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await apiInstance.delete(`/book/${id}`)
      toast.success("Book deleted succesfully!")
      setBooks((prev) => prev.filter((book) => book._id !== id));
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
      <AuthHeader/>
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
        title={editingBook ? "Edit book" : "Add New book"}
        onClose={handleCloseModal}
        onAction={handleAddUser}
        isLoading={isLoading}
        actionLabel={getActionLabel(isLoading,editingBook)}
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
