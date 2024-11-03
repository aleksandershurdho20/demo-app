export const getActionLabel = (isLoading,editingUser) =>  isLoading
? editingUser
  ? "Updating..."
  : "Creating..."
: editingUser
  ? "Update User"
  : "Create User"