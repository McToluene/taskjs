import React, { Fragment } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack } from "@material-ui/icons";
import { useLocation, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  let content = null;

  const goBack = () => {
    history.goBack();
  };

  const createName = (path) => {
    return path.replace("/home/", "").replace("-", " ");
  };

  if (location.pathname !== "/home") {
    content = (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={goBack}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" className={classes.title} component="div">
              {createName(location.pathname.toString())}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Header;
