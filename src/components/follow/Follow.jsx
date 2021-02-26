import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../context/AuthContext';

const Follow = ({ user }) => {
  const [isFoolow, setIsFoolow] = useState(true);
  const [followArray, setFollowArray] = useState([]);
  const { currentUser, database } = useAuth();
  const { avatar_url, login } = user;

  useEffect(() => {
    chackFollow();
  }, [isFoolow, login]);

  async function chackFollow() {
    try {
      const ref = await database.ref(`${currentUser.uid}/follow/${login}`);

      await ref.on('value', function (snapshot) {
        // console.log(snapshot);
        if (snapshot.val() !== null) {
          setIsFoolow(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function addFollow() {
    try {
      await database
        .ref(currentUser.uid)
        .child('follow')
        .child(login)
        .set({ avatar_url: avatar_url, login: login });
      setIsFoolow(false);
    } catch (error) {
      console.log('add Follow have a proble');
      console.log(error);
    }
  }

  async function unFollow() {
    try {
      const ref = await database.ref(`${currentUser.uid}/follow/${login}`);
      ref.remove();
      setIsFoolow(true);
    } catch (error) {
      console.log('UN Follow havea some problem');
      console.log(error);
    }
  }

  if (isFoolow && login) {
    return (
      <div>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={addFollow}
          disabled={!isFoolow}
        >
          Follow
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button
          type="button"
          variant="contained"
          //   color=""
          onClick={unFollow}
          disabled={isFoolow}
        >
          UnFollow
        </Button>
      </div>
    );
  }
};

export default Follow;
