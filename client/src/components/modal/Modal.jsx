import React from "react";
import { PlusCircle, User, X, Pencil, Trash2, Loader2 } from 'lucide-react';

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
  onAction,
  isLoading,
  actionLabel,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-white shadow-xl">
          <div className="h-full flex flex-col">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-grow px-6 py-4">{children}</div>

            <div className="px-6 py-4 border-t border-gray-200">
              <button
                onClick={onAction}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {actionLabel}
                  </>
                ) : (
                  actionLabel
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
