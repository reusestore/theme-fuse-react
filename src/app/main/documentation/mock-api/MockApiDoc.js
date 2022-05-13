import Typography from '@mui/material/Typography';
import mockApiJson from '@mock-api/mock-api.json';
import { RedocStandalone } from 'redoc';
import FusePageCarded from '@fuse/core/FusePageCarded';

function MockApiDoc() {
  return (
    <FusePageCarded
      header={
        <div className="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-24 sm:py-32 sm:px-40">
          <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
            Mock API Definitions (OpenAPI 3.0)
          </Typography>
        </div>
      }
      content={
        <RedocStandalone
          spec={mockApiJson}
          options={{
            layout: 'stacked',
            hideHostname: true,
            hideInfoSection: true,
            hideInfoDescription: true,
            hideDownloadButton: true,
            noAutoAuth: true,
            hideLoading: true,
            nativeScrollbars: true,
            expandResponses: '',
            jsonSampleExpandLevel: 1,
            sortOperationsAlphabetically: true,
            sortPropsAlphabetically: true,
            sortTagsAlphabetically: true,
            pathInMiddlePanel: true,
          }}
        />
      }
      scroll="content"
    />
  );
}

export default MockApiDoc;
