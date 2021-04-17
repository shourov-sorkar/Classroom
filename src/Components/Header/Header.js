import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";
import logo from "../../Assets/logo.png";
import { Add, Apps } from "@material-ui/icons";
const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
}

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img src={logo} alt="Logo" />
            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>
          </div>
          <div className={classes.header__wrapper__right}>
            <IconButton>
              <Add onClick={handleClick} className={classes.iconHeader} />
            </IconButton>
            <IconButton>
              <Apps className={classes.iconHeader}/>
            </IconButton>
            <Menu 
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem>Join Class</MenuItem>
                <MenuItem>Create Class</MenuItem>


            </Menu>
            <div>
              <Avatar className={classes.iconHeader}/>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
