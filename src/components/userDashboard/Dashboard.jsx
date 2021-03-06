import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import Following from './Following';

const Dashboard = () => {
  const { logout, currentUser, database } = useAuth();
  const history = useHistory();
  const [following, setFollowing] = useState([]);
  const [empty, setEmpty] = useState(false);

  async function getDataFollow() {
    const ref = await database.ref(`${currentUser.uid}/follow/`);
    await ref.once('value', async (snapshot) => {
      try {
        setEmpty(false);
        await setFollowing(Object.values(snapshot.val()));
      } catch (error) {
        setEmpty(true);
        console.log(error);
      }
    });
  }

  useEffect(() => {
    getDataFollow();
  }, [currentUser]);

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
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
      <div style={{ margin: '60px' }}>
        {empty ? <>FOLLOWING LIST IS EMPTY</> : <>MY FOLLOWING LIST</>}

        <Following data={following} />
      </div>
    </div>
  );
};

export default Dashboard;
