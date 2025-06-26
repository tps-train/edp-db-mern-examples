import React, { useEffect, useState } from 'react';
import '../styles/UserTable.css';

let SERVERIP="192.168.10.117";
// let SERVERIP="localhost";

const UserTable: React.FC = () => {
    const [userData, setUserData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://${SERVERIP}:3000/user`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData([data]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.dateOfBirth}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;