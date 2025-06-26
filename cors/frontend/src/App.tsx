import React, { useEffect, useState } from 'react';
import './styles/UserTable.css';
import UserTable from './components/UserTable';

const App = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3000/user');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="App">
            <h1>User Information</h1>
            {userData ? <UserTable user={userData} /> : <p>Loading...</p>}
        </div>
    );
};

export default App;