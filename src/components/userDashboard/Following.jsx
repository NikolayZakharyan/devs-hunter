import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Follow from '../follow/Follow';

const useStyles = makeStyles((theme) => ({}));
const preventDefault = (event) => event.preventDefault();

const Following = ({ ...props }) => {
  const { data } = props;
  const classes = useStyles();

//   console.log(data[0]);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {data.map((user, i) => {
        return (
          <div
            key={i}
            style={{ width: '160px', height: '200px', border: '1px solid red' }}
          >
            <Avatar
              alt="Remy Sharp"
              src={`${user.avatar_url}`}
              style={{ margin: '10px auto', width: '60px', height: '60px' }}
            />
            <div style={{ textAlign: 'center' }}>
              <GitHubIcon style={{ marginRight: '10px' }} />
              <Link href="#" onClick={preventDefault}>
                {`${user.login}`}
              </Link>
            </div>
            <div style={{ marginTop: '50px' }}>
              {user ? <Follow user={user} /> : <></>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Following;
