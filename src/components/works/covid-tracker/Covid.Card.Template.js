import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import React from "react"

export default ({ children, title }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle1"> {title} </Typography>
      {children}
    </CardContent>
  </Card>
)
