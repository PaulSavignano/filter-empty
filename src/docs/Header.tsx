import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import MuiIconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FilterIcon from '@material-ui/icons/FilterList';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SearchIcon from '@material-ui/icons/Search';
import React, { useContext, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import BrandName from './BrandName';
import IconButton from './common/IconButton';
import SearchContext from './common/Search/SearchContext';
import SearchField from './common/Search/SearchField';
import nav from './nav';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarNav: {
      alignItems: 'center',
      display: 'flex',
      flex: '1 1 auto',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-end',
    },
    brandContainer: {
      alignItems: 'center',
      color: theme.palette.common.white,
      display: 'flex',
      flexFlow: 'row nowrap',
      textDecoration: 'none',
    },
    brandIcon: {
      marginRight: theme.spacing(1),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    drawerIconButton: {
      marginRight: theme.spacing(0.5),
    },
    drawerPaper: {
      width: drawerWidth,
    },
    search: {
      marginLeft: theme.spacing(1),
    },
    toolbar: {
      ...theme.mixins.toolbar,
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 8px 0 16px',
    },
  })
);

function Header(): React.ReactElement {
  const search = useContext(SearchContext);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = useCallback(
    (bool: boolean | React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>): void => {
      if (typeof bool === 'boolean') {
        return setDrawerOpen(bool);
      }
      return setDrawerOpen(!isDrawerOpen);
    },
    [isDrawerOpen]
  );

  return (
    <header>
      <AppBar position="sticky">
        <Toolbar>
          <MuiIconButton
            aria-label="open drawer"
            className={classes.drawerIconButton}
            color="inherit"
            edge="start"
            onClick={handleDrawerOpen}
          >
            <FilterIcon />
          </MuiIconButton>
          {search.isOpen ? (
            <SearchField />
          ) : (
            <>
              <BrandName />
              <div className={classes.appBarNav}>
                {Object.keys(nav).map((key) => {
                  const { icon: NavIcon, name, path } = nav[key];
                  return (
                    <IconButton key={path} title={name} to={path}>
                      <NavIcon />
                    </IconButton>
                  );
                })}
                <IconButton onClick={(): void => search.setSearchOpen(true)} title="search">
                  <SearchIcon />
                </IconButton>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleDrawerOpen}
        open={isDrawerOpen}
      >
        <div className={classes.toolbar}>
          <BrandName />
          <MuiIconButton color="inherit" onClick={handleDrawerOpen}>
            <ChevronLeftIcon />
          </MuiIconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={NavLink} onClick={handleDrawerOpen} to="/demo">
            <ListItemIcon>
              <PlayArrowIcon />
            </ListItemIcon>
            <ListItemText primary="Take Quiz" />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}

export default Header;
