import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Follow from '../follow/Follow';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({}));
const preventDefault = (event) => event.preventDefault();

const Following = ({ ...props }) => {
  const { data } = props;
  const classes = useStyles();

  //   console.log(data[0]);

  return (
    <Wrapper>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div className="followers-cards" style={{ marginTop: '30px' }}>
          {data.map((user, i) => {
            return (
              <div className="card" key={i}>
                <Avatar alt={user.login} src={`${user.avatar_url}`} />
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <GitHubIcon style={{ width: '15px' }} />
                  <Link
                    href={`https://github.com/${user.login} `}
                    target={'blank'}
                    onClick={preventDefault}
                  >
                    <p>{user.login}</p>
                  </Link>
                </div>

                <Button href={`/show/${''} `} target={'blank'} color="primary">
                  <p>Analytics</p>
                </Button>
                <div style={{ marginTop: '10px' }}>
                  {user ? <Follow user={user} /> : <></>}
                </div>
              </div>
            );
          })}
        </div>
        {/* {data.map((user, i) => {
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
            })} */}
      </div>
    </Wrapper>
  );
};

export default Following;

const Wrapper = styled.div`
  .container {
    margin-top: 5px;
    width: 50%;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .followers {
    display: flex;
    overflow: auto;
  }
  .followers-cards {
    /* background-size:cover; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 15px;
  }
  .card {
    /* overflow-x: auto; */

    align-items: center;
    width: 140px;
    height: 200px;
  }
  .MuiAvatar-root {
    margin: 10px;
    width: 60px;
    height: 60px;
    border: 3px solid #9c9898;
  }
  p {
    font-size: 10px;
    margin: 0 auto;
  }
  .MuiButton-label {
    margin: 0 auto;
  }

  .flw {
    font-size: 14px;
    margin-right: 100%;
  }
`;
