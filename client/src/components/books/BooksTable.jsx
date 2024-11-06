import { Pencil, Trash2, User } from "lucide-react";
import React from "react";
import { columns } from "../../constants/table";

export default function BooksTable({
  books,
  handleDeleteBook,
  handleEditBook,
  isLoading,
}) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column,index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {books.map((book) => (
          <tr key={book._id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {book._id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-900">{book.title}</span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {book.author}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {book.genre}
            </td>
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
              <button
                onClick={() => handleEditBook(book)}
                className="text-blue-600 hover:text-blue-900 mr-4"
                disabled={isLoading}
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDeleteBook(book._id)}
                className="text-red-600 hover:text-red-900"
                disabled={isLoading}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
