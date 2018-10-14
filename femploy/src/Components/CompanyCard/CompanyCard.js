import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./CompanyCard.css";

const styles = {
  card: {
    maxWidth: 800,
    maxHeight: 800
  },
  media: {
    width: 250,
    height: 250,
    marginTop: 50,
    marginLeft: 70,
    marginRight: 200,
  },
  /*
  pos: {
    marginLeft: 800,
    marginRight: 200,
  }
  */
};

function CompanyCard(props) {
  const { classes } = props;
  return (
    
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.pic}
        />
        <CardContent>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default withStyles(styles)(CompanyCard);