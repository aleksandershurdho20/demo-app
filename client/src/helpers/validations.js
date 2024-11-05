export const validateFields = (book) => {
    const newErrors = {};

    if (!book.title.trim()) newErrors.title = 'Title is required';
    if (!book.isbn.trim()) newErrors.isbn = 'Isbn is required';
    if (!book.description.trim()) newErrors.description = 'Description is required';
    return newErrors
}