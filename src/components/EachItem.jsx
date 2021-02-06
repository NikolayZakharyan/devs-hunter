import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire} from '@fortawesome/free-solid-svg-icons'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({users}) {
  const classes = useStyles();

  console.log(users)

  return <></>

  // return (
  //   <Card className={classes.root}>
  //     <CardActionArea>
  //       <CardMedia
  //         component="img"
  //         alt="Contemplative Reptile"
  //         height="140"
  //         image={props.src}
  //         title="developer"
  //       />
  //       <CardContent>
  //         <Typography gutterBottom variant="h7" component="h2">
  //           {props.fullname}
  //         </Typography>
  //         <Typography gutterBottom variant="h6" component="h2">
  //           {props.username}
  //         </Typography>
  //         <Typography  color="textSecondary" component="span">
  //         <FontAwesomeIcon icon={faFire} />
  //         POPULAR REPO
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //           {props.info}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary" href="https://github.com/">
  //         More
  //       </Button>
  //     </CardActions>
  //   </Card>
  // );
}