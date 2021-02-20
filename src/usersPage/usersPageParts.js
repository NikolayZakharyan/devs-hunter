import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import GitHubIcon from '@material-ui/icons/GitHub';
import UpdateIcon from '@material-ui/icons/Update';
import HttpIcon from '@material-ui/icons/Http';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import './usersPage.css';

const useStyles = makeStyles((theme) => ({
  drawer: {
    maxWidth: '17%',
    minWidth: '17%',
    width: '17%',
  },
  drawerPaper: {
    // backgroundImage: `linear-gradient(#F5F5F5,rgb(49, 42, 42))`,
    color: 'rgb(49, 42, 42)',
    maxWidth: '17%',
    minWidth: '17%',
    width: '17%',
    right: '12%',
    height: '1000px',
    top: '10.5%',
    position: 'absolute',
  },
  bigAvatar: {
    margin: 30,
    width: 80,
    height: 80,
    backgroundColor: '#7D9C9B',
  },
  item: {
    '& span, & svg': {
      fontSize: '30px',
    },
    '& span': {
      marginLeft: '-10px',
      fontSize: '13px',
    },
  },
}));

function SideMenu({ user }) {
  const classes = useStyles();

  // console.log(user);

  // const user={
  //   name: 'Liana',
  //   surname: 'Ilyichyova',
  //   company: 'Hellotex',
  //   position: 'HR manager',
  //   location: "Armenia",
  //   email: 'liana.ilyichyova@gmail.com',
  //   phone: '+374 98 331534',
  // }

  return (
    <Drawer
      open={true}
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src={user.avatar_url}
          className={classes.bigAvatar}
        />
      </Grid>
      <div>
        <div>in Github</div>
        <p style={{ fontSize: '12px', margin: '6px' }}>
          {user.created_at.slice(0, 10)}
        </p>
      </div>

      <div className={classes.item}>
        {user.name ? (
          <List>
            <ListItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={`${user.name}`} />
            </ListItem>
          </List>
        ) : (
          <></>
        )}
        {user.location ? (
          <List>
            <ListItem>
              <ListItemIcon>
                <MyLocationIcon />
              </ListItemIcon>
              <ListItemText primary={`${user.location}`} />
            </ListItem>
          </List>
        ) : (
          <></>
        )}
        {user.company ? (
          <List>
            <ListItem>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary={`${user.company}`} />
            </ListItem>
          </List>
        ) : (
          <></>
        )}
        {user.login ? (
          <List>
            <ListItem
              button
              component={'a'}
              href={`https://github.com/${user.login}`}
              target="_blank"
            >
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary={`${user.login}`} />
            </ListItem>
          </List>
        ) : (
          <></>
        )}
        {user.blog ? (
          <List>
            <ListItem
              button
              component={'a'}
              href={`${user.blog}`}
              target="_blank"
              title={`${user.blog}`}

            >
              <ListItemIcon>
                <HttpIcon />
              </ListItemIcon>
              {/* <ListItemText primary={`${user.blog}`} /> */}
              <ListItemText primary={`${user.login}s blog`} />

            </ListItem>
          </List>
        ) : (
          <></>
        )}
        {user.updated_at ? (
          <List>
            <ListItem>
              <ListItemIcon>
                <UpdateIcon />
              </ListItemIcon>
              <ListItemText primary={`${user.updated_at.slice(0, 10)}`} />
            </ListItem>
          </List>
        ) : (
          <></>
        )}
        {user.twitter_username ? (
          <List>
            <ListItem
              button
              component={'a'}
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
            >
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText primary={`${user.twitter_username}`} />
            </ListItem>
          </List>
        ) : (
          <></>
        )}
        {user.bio ? (
          <div>
            <div>About</div>
            <p style={{ fontSize: '10px', margin: '6px' }}>{user.bio}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Drawer>
  );
}

export default SideMenu;
