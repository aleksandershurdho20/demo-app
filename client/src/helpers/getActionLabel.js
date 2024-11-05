export const getActionLabel = (isLoading,editingUser) =>  isLoading
? editingUser
  ? "Updating..."
  : "Creating..."
: editingUser
  ? "Update Book"
  : "Create Book"