import React from 'react';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';

const Dashboard = () => {
    const { logout, currentUser } = useAuth();
    const history = useHistory()

  async function handleLogout() {
    try {
        await logout();
        history.push('/login')
    } catch {
      console.log('log0UT error');
    }
  }

  return (
    <div>
      DASHBOARD ________ {currentUser.email} ______________
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Log OUT
      </Button>
    </div>
  );
};

export default Dashboard;
