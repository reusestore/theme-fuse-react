import clsx from 'clsx';

function SectionPreview(props) {
  const { section, className } = props;
  return (
    <div
      className={clsx(
        'flex w-128 h-80 rounded-md overflow-hidden border-2 hover:opacity-80',
        className
      )}
    >
      <div className={clsx('w-32 bg-gray-100', section === 'navbar' && 'bg-red-50')}>
        <div className="mt-12 mx-6 space-y-1">
          <div className="h-4 rounded-sm bg-gray-300" />
          <div className="h-4 rounded-sm bg-gray-300" />
          <div className="h-4 rounded-sm bg-gray-300" />
          <div className="h-4 rounded-sm bg-gray-300" />
          <div className="h-4 rounded-sm bg-gray-300" />
        </div>
      </div>
      <div className="flex flex-col flex-auto border-l">
        <div className={clsx('h-12 bg-gray-100', section === 'toolbar' && 'bg-red-50')}>
          <div className="flex items-center justify-end h-full mr-6">
            <div className="w-4 h-4 ml-4 rounded-full bg-gray-300" />
            <div className="w-4 h-4 ml-4 rounded-full bg-gray-300" />
            <div className="w-4 h-4 ml-4 rounded-full bg-gray-300" />
          </div>
        </div>
        <div
          className={clsx(
            'flex flex-auto border-t border-b bg-gray-50',
            section === 'main' && 'bg-red-50'
          )}
        />
        <div className={clsx('h-12 bg-gray-100', section === 'footer' && 'bg-red-50')}>
          <div className="flex items-center justify-end h-full mr-6">
            <div className="w-4 h-4 ml-4 rounded-full bg-gray-300" />
            <div className="w-4 h-4 ml-4 rounded-full bg-gray-300" />
            <div className="w-4 h-4 ml-4 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionPreview;
