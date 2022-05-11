import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import exampleActivitiesData from './exampleActivitiesData';
import ActivityTimelineItem from './ActivityTimelineItem';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function ActivitiesPage() {
  return (
    <Root
      content={
        <div className="flex flex-col flex-auto px-24 py-40 sm:px-64 sm:pt-72 sm:pb-80">
          <Typography className="text-4xl font-extrabold tracking-tight leading-none">
            All Activities
          </Typography>
          <Typography className="mt-6 text-lg" color="text.secondary">
            Application wide activities are listed here as individual items, starting with the most
            recent.
          </Typography>
          <Timeline
            className="py-48"
            position="right"
            sx={{
              '& .MuiTimelineItem-root:before': {
                display: 'none',
              },
            }}
          >
            {exampleActivitiesData.map((item, index) => (
              <ActivityTimelineItem
                last={exampleActivitiesData.length === index + 1}
                item={item}
                key={item.id}
              />
            ))}
          </Timeline>
        </div>
      }
    />
  );
}

export default ActivitiesPage;
