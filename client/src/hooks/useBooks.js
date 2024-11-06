import { useState, useEffect } from "react";
import { apiInstance } from "../utils/api";
import toast from "react-hot-toast";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await apiInstance.get("books");
        setBooks(res.data);
      } catch (error) {
        toast.error("Failed to fetch books");
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async (book, editingBook) => {
    setIsLoading(true);
    try {
      if (editingBook) {
        await apiInstance.put(`/book/${editingBook._id}`, book);
        setBooks((prevBooks) =>
          prevBooks.map((b) =>
            b._id === editingBook._id ? { ...book, _id: b._id } : b
          )
        );
        toast.success("Book updated successfully!");
      } else {
        const { data } = await apiInstance.post("create", {
          ...book,
          user: JSON.parse(localStorage.getItem("user"))._id,
        });
        toast.success("Book created successfully!");
        setBooks((prevBooks) => [
          ...prevBooks,
          { _id: data._id, ...book },
        ]);
      }
    } catch (error) {
      toast.error("Error saving book");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteBook = async (id) => {
    setIsLoading(true);
    try {
      await apiInstance.delete(`/book/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      toast.success("Book deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete book");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    books,
    isLoading,
    handleAddBook,
    handleDeleteBook,
  };
};