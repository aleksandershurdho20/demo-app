export const validateFields = (book) => {
    const newErrors = {};

    if (!book.title.trim()) newErrors.title = 'Title is required';
    if (!book.author.trim()) newErrors.author = 'Author is required';
    if (!book.genre.trim()) newErrors.genre = 'Genre is required';
    return newErrors
}