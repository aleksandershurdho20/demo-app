import React from 'react'

export default function BookForm({book,handleInputChange,errors}) {
  return (
    <div className="flex-1 p-6 space-y-6">
    <div className="space-y-2">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">
        Title
      </label>
      <input
        type="text"
        id="name"
        name="title"
        value={book.title}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.name ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter title"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.title}</p>
      )}
    </div>

    <div className="space-y-2">
      <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 text-left">
        ISBN
      </label>
      <input
        type="text"
        id="isbn"
        name="isbn"
        value={book.isbn}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.isbn ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter ISBN"
      />
      {errors.isb && (
        <p className="text-red-500 text-sm mt-1">{errors.isb}</p>
      )}
    </div>

    <div className="space-y-2">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 text-left">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={book.description}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.description ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter Description"
      />
      {errors.description && (
        <p className="text-red-500 text-sm mt-1">{errors.description}</p>
      )}
    </div>
  </div>
  )
}
