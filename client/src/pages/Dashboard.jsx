import { Loader2, X } from "lucide-react";
import React, { useState } from "react";
import UsersForm from "../components/users/UsersForm";
import UsersManagementTItle from "../components/users/UsersManagementTItle";
import UsersTable from "../components/users/UsersTable";
import { validateFields } from "../helpers/validations";
import Modal from "../components/modal/Modal";
import { getActionLabel } from "../helpers/getActionLabel";

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const resetForm = () => {
    setNewUser({ name: "", email: "", role: "" });
    setEditingUser(null);
    setErrors({});
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const validateForm = () => {
    const newErrors = validateFields(newUser);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAddUser = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (editingUser) {
        setUsers((prev) =>
          prev.map((user) =>
            user.id === editingUser.id ? { ...newUser, id: user.id } : user,
          ),
        );
      } else {
        setUsers((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            ...newUser,
          },
        ]);
      }
      handleCloseModal();
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setIsModalOpen(true);
  };

  const handleDeleteUser = async (userId) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUsers((prev) => prev.filter((user) => user.id !== userId));
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNewUser = () => {
    resetForm();
    setIsModalOpen(true);
  };
  return (
    <div className="p-8">
      <UsersManagementTItle isLoading={isLoading} onClick={handleAddNewUser} />

      <div className="border rounded-lg overflow-hidden">
        <UsersTable
          users={users}
          handleEditUser={handleEditUser}
          handleDeleteUser={handleDeleteUser}
          isLoading={isLoading}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        title={editingUser ? "Edit User" : "Add New User"}
        onClose={handleCloseModal}
        onAction={handleAddUser}
        isLoading={isLoading}
        actionLabel={getActionLabel(isLoading,editingUser)}
      >
        <UsersForm
          newUser={newUser}
          errors={errors}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
