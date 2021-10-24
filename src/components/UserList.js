import React, { useState } from 'react';

const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => {
                return (
                    <div className="card mb-2" key={user.id}>
                        <div className="card-body p-3">
                            {user.name}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default UserList;