import React, { useState } from "react";

const UserEditForm = ({ user, onUpdate, onCancel }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={editedUser.username}
        onChange={handleChange}
      />
      <input name="email" value={editedUser.email} onChange={handleChange} />
      <select name="role" value={editedUser.role} onChange={handleChange}>
        <option value="client">Client</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserEditForm;
