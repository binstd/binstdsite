import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from '../common/LayoutBody';

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '90vh',
      minHeight: 300,
      maxHeight: 1300,
    },
  },
  layoutBody: {
    backgroundColor: '#ffffff',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing.unit * 1,
  },
});

function ProductHeroLayout(props) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="full">
       <img
          src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/123435.jpg"
          alt="wonder"
        //   width="147"
          height="80"
        />
        {children}
        <div className={classes.backdrop} />
        <div className={classNames(classes.background, backgroundClassName)} />
        <img
          className={classes.arrowDown}
          src="https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/productHeroArrowDown-1.png"
          height="16"
          width="12"
          alt="arrow down"
        />
       
      </LayoutBody>
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHeroLayout);
