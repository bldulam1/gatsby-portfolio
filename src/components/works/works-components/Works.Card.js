import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import { navigate } from "@reach/router"
import React from "react"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardActionArea: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cardContent: {
    flexGrow: 1,
  },
}))

export default ({ image, link, title, description, disabled }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => navigate(link)}
        className={classes.cardActionArea}
        disabled={disabled}
      >
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color="secondary"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined" disabled>
          Like
        </Button>
      </CardActions>
    </Card>
  )
}
