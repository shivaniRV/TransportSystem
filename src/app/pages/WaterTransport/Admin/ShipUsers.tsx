import React, { useState } from "react";
import Pagination from "./Pagination";
// import AddUser from "./AddUser"; // A modal component for adding a new user

// Example static data for users
const mockUsers = [
  { id: 1, name: "Alice Smith", age: 28, email: "alice@example.com", status: "Active" },
  { id: 2, name: "Bob Johnson", age: 34, email: "bob@example.com", status: "Inactive" },
  { id: 3, name: "Charlie Brown", age: 22, email: "charlie@example.com", status: "Active" },
];
 
export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleEntriesPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setEntriesPerPage(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleAddUser = (newUser: { name: string; age: number; email: string; status: string }) => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserWithId]);
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Users</span>
          <span className="text-muted mt-1 fw-semibold fs-7">
            Total Users: {filteredUsers.length}
          </span>
        </h3>
        <div className="card-toolbar d-flex flex-end">
          <input
            type="text"
            className="form-control border-1 border-primary border-opacity-25 mx-2 text-gray-800"
            style={{ width: "12rem" }}
            placeholder="Search Users"
            value={search}
            onChange={handleSearchChange}
          />
          <button
            type="button"
            className="btn btn-light-primary border-0 rounded mx-2"
            onClick={() => setShowAddUserModal(true)} // Open the modal
          >
            <i className="fs-2 bi bi-plus" />
            Add New User
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table table-hover table-rounded table-striped border gy-7 gs-7">
            <thead>
              <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers
                .slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)
                .map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td className="text-center">
                      <div className="d-flex flex-row align-items-center">
                        <button
                          className="btn btn-icon btn-bg-light btn-sm me-1"
                          // View button functionality
                        >
                          <i className="ki-duotone ki-eye fs-3 text-primary" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                          // Edit button functionality
                        >
                          <i className="ki-duotone ki-pencil fs-3 text-primary" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                          // Delete button functionality
                        >
                          <i className="ki-duotone ki-trash fs-3 text-danger" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="card-footer">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredUsers.length / entriesPerPage)}
          onPageChange={handlePageChange}
          entriesPerPage={entriesPerPage}
          onEntriesPerPageChange={handleEntriesPerPageChange}
        />
      </div>

      {/* Add User Modal */}
      {/* {showAddUserModal && (
        <AddUser
          onClose={() => setShowAddUserModal(false)} // Close the modal
          onAdd={handleAddUser} // Add user callback
        />
      )} */}
    </div>
  );
};
