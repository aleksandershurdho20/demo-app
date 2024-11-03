import React from 'react'

export default function UsersForm({newUser,handleInputChange,errors}) {
  return (
    <div className="flex-1 p-6 space-y-6">
    <div className="space-y-2">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={newUser.name}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.name ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter name"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
      )}
    </div>

    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.email ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter email"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
    </div>

    <div className="space-y-2">
      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
        Role
      </label>
      <input
        type="text"
        id="role"
        name="role"
        value={newUser.role}
        onChange={handleInputChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          errors.role ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Enter role"
      />
      {errors.role && (
        <p className="text-red-500 text-sm mt-1">{errors.role}</p>
      )}
    </div>
  </div>
  )
}
