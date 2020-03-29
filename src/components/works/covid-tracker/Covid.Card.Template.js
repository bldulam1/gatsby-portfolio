import React from "react"
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

export default ({ children, title }) => (
  <Card>
    <CardContent>
      <Typography variant="subtitle1"> {title} </Typography>
      {children}
    </CardContent>
  </Card>
)
