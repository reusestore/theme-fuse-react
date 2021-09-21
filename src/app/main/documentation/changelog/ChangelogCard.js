import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { blue, green, red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';

const StyledBadge = styled(Card)(({ theme, value }) => ({
  display: 'inline-flex',
  fontSize: 13,
  color: '#FFF',
  letterSpacing: '.015em',
  lineHeight: 1,
  padding: '5px 8px',
  borderRadius: 2,

  ...(value === 'new' && {
    backgroundColor: green[500],
  }),
  ...(value === 'fix' && {
    backgroundColor: blue[500],
  }),
  ...(value === 'breaking' && {
    backgroundColor: red[500],
  }),
}));

function ChangelogCard(props) {
  return (
    <div className={clsx('py-24 px-32 shadow', props.className)}>
      <div className="flex items-center">
        {props.version && (
          <Typography
            className="text-24 font-medium"
            component="h2"
          >{`v${props.version}`}</Typography>
        )}
        {props.date && (
          <Typography className="text-17 mx-8 font-normal" color="textSecondary" component="h3">
            ({props.date})
          </Typography>
        )}
      </div>
      {props.newChanges.length > 0 && (
        <div className="mt-24">
          <StyledBadge value="new">New</StyledBadge>
          <ul className="my-16 px-24">
            {props.newChanges.map((change, index) => (
              <li key={index} className="mb-6">
                <Typography>{change}</Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
      {props.fixedChanges.length > 0 && (
        <div className="mt-24">
          <StyledBadge value="fix">Fixed</StyledBadge>
          <ul className="my-16 px-24">
            {props.fixedChanges.map((change, index) => (
              <li key={index} className="mb-6">
                <Typography>{change}</Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
      {props.breakingChanges.length > 0 && (
        <div className="mt-24">
          <StyledBadge value="breaking">Breaking Changes</StyledBadge>
          <ul className="my-16 px-24">
            {props.breakingChanges.map((change, index) => (
              <li key={index} className="mb-6">
                <Typography>{change}</Typography>
              </li>
            ))}
          </ul>
        </div>
      )}

      {props.notes}
    </div>
  );
}

ChangelogCard.defaultProps = {
  version: null,
  date: null,
  newChanges: [],
  fixedChanges: [],
  breakingChanges: [],
  notes: null,
};
export default ChangelogCard;
