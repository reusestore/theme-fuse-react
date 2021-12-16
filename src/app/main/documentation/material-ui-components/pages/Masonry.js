import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function MasonryDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/masonry"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Masonry
      </Typography>
      <Typography className="description">
        Masonry lays out contents of different sizes as blocks of the same width and variable height
        with configurable gaps.
      </Typography>

      <Typography className="mb-40" component="div">
        Masonry maintains a list of content blocks with a consistent width but variable height. The
        contents are ordered by row. If a row is already filled with the specified number of
        columns, the next item starts another row, and it is added to the shortest column.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic masonry
      </Typography>
      <Typography className="mb-40" component="div">
        A simple example of a <code>Masonry</code>. <code>Masonry</code> is a container for one or
        more items. It can receive any element including <code>{`<div />`}</code> and{' '}
        <code>{`<img />`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/BasicMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/BasicMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Image masonry
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of <code>Masonry</code> for images. <code>Masonry</code>{' '}
        orders its children by row. If you&#39;d like to order images by column, check out{' '}
        <a href="/components/image-list/#masonry-image-list">ImageList</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ImageMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ImageMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Columns
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>columns</code> to configure the number of
        columns of a <code>Masonry</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/FixedColumns.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/FixedColumns.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <code>columns</code> accepts responsive values:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ResponsiveColumns.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ResponsiveColumns.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Spacing
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>spacing</code> to configure the spacing
        between items. It is important to note that the value provided to the <code>spacing</code>{' '}
        prop is multiplied by the theme&#39;s spacing field.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/FixedSpacing.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/FixedSpacing.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <code>spacing</code> accepts responsive values:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ResponsiveSpacing.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ResponsiveSpacing.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side rendering
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>defaultHeight</code>,{' '}
        <code>defaultColumns</code> and <code>defaultSpacing</code>, which are used to support
        server-side rendering.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          <strong>Note</strong>: <code>defaultHeight</code> should be large enough to render all
          rows. Also, it is worth mentioning that items are not added to the shortest column in case
          of server-side rendering.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/SSRMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/SSRMasonry.js')}
        />
      </Typography>
    </>
  );
}

export default MasonryDoc;
