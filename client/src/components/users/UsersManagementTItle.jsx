import React from 'react'
import { PlusCircle, User, X, Pencil, Trash2, Loader2 } from 'lucide-react';

export default function UsersManagementTItle({onClick,isLoading}) {
  return (
    <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">User Management</h1>
    <button
    onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      disabled={isLoading}
    >
      <PlusCircle className="h-4 w-4" />
      Add User
    </button>
  </div>

  )
}
