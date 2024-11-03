export const validateFields = (newUser) => {
    const newErrors = {};

    if (!newUser.name.trim()) newErrors.name = 'Name is required';
    if (!newUser.email.trim()) newErrors.email = 'Email is required';
    if (!newUser.email.includes('@')) newErrors.email = 'Invalid email format';
    if (!newUser.role.trim()) newErrors.role = 'Role is required';
    return newErrors
}