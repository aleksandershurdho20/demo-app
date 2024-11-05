import React from 'react'

export default function BookForm({book,handleInputChange,errors}) {
  return (
    <div className="flex-1 p-6 space-y-6">
    <div className="space-y-2">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 text-left">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={book.title}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.title ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter title"
      />
      {errors.title && (
        <p className="text-red-500 text-sm mt-1">{errors.title}</p>
      )}
    </div>

    <div className="space-y-2">
      <label htmlFor="author" className="block text-sm font-medium text-gray-700 text-left">
        Author
      </label>
      <input
        type="text"
        id="author"
        name="author"
        value={book.author}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.author ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter Author"
      />
      {errors.author && (
        <p className="text-red-500 text-sm mt-1">{errors.author}</p>
      )}
    </div>

    <div className="space-y-2">
      <label htmlFor="genre" className="block text-sm font-medium text-gray-700 text-left">
        Genre
      </label>
      <textarea
        id="genre"
        name="genre"
        value={book.genre}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.genre ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter Genre"
      />
      {errors.genre && (
        <p className="text-red-500 text-sm mt-1">{errors.genre}</p>
      )}
    </div>
  </div>
  )
}
