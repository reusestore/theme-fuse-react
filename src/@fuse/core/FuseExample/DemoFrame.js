import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import createGenerateClassName from '@mui/styles/createGenerateClassName';
import withStyles from '@mui/styles/withStyles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { cloneElement, Component } from 'react';
import Frame from 'react-frame-component';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    flexGrow: 1,
    height: 400,
    border: 'none',
  },
});

const generateClassName = createGenerateClassName({
  productionPrefix: 'iframe-',
});

class DemoFrame extends Component {
  state = {
    ready: false,
  };

  handleRef = (ref) => {
    this.contentDocument = ref ? ref.node.contentDocument : null;
  };

  onContentDidMount = () => {
    // this.setState({
    //   ready: true,
    //   jss: create({
    //     ...jssPreset(),
    //     plugins: [...jssPreset().plugins, jssExtend()],
    //     insertionPoint: this.contentDocument.querySelector('#jss-demo-insertion-point'),
    //   }),
    //   sheetsManager: new Map(),
    //   container: this.contentDocument.body,
    // });
  };

  onContentDidUpdate = () => {
    this.contentDocument.body.dir = this.props.theme.direction;
  };

  renderHead = () => (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                    html {
                    font-size: 62.5%;
                    font-family: Poppins, Roboto, Helvetica Neue, Arial, sans-serif;
                    }
                `,
        }}
      />
      <noscript id="jss-demo-insertion-point" />
    </>
  );

  render() {
    const { children, classes, theme } = this.props;

    return (
      <Frame
        head={this.renderHead()}
        ref={this.handleRef}
        className={clsx(classes.root, 'shadow')}
        contentDidMount={this.onContentDidMount}
        contentDidUpdate={this.onContentDidUpdate}
      >
        {this.state.ready ? (
          // <StylesProvider
          //   jss={this.state.jss}
          //   generateClassName={generateClassName}
          //   sheetsManager={this.state.sheetsManager}
          // >
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              {cloneElement(children, {
                container: this.state.container,
              })}
            </ThemeProvider>
          </StyledEngineProvider>
        ) : // </StylesProvider>
        null}
      </Frame>
    );
  }
}

DemoFrame.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DemoFrame);
