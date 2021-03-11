/* eslint-disable no-alert */

const sizes = {
  lg: 'max-w-lg',
  sm: 'max-w-sm',
};

interface CardProps {
  title: string,
  imgPosition?: 'left' | 'right',
  size?: keyof typeof sizes,
  onSave?: () => void;
  onDelete?: () => void;
}

const Card = (props: CardProps) => {
  const {
    title,
    size = 'sm',
    imgPosition = 'left',
    onSave,
    onDelete,
  } = props;

  return (
    <div className={sizes[size]}>
      <div className="grid gap-6 p-8 bg-white rounded-md shadow-md">
        <h3 className="text-2xl text-gray-500">{title}</h3>
        <hr />
        <div className="grid grid-cols-2 gap-6">
          {imgPosition === 'left'
            ? (
              <>
                <div className="bg-gray-400 rounded-md" />
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  repudiandae magnam illo blanditiis?
                </p>
              </>
            )
            : (
              <>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  repudiandae magnam illo blanditiis?
                </p>
                <div className="bg-gray-400 rounded-md" />
              </>
            )}
        </div>
        <div className="flex gap-6">
          {Boolean(onSave) && (
          <button
            type="button"
            className="block w-full p-1 text-gray-500 uppercase border-2 border-gray-400 rounded-md shadow-sm // focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onClick={() => onSave && onSave()}
          >
            Save
          </button>
          )}
          {Boolean(onDelete) && (
          <button
            type="button"
            className="block w-full p-1 text-gray-500 uppercase border-2 border-gray-400 rounded-md shadow-sm // focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onClick={() => onDelete && onDelete()}
          >
            Save
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Exercise01 = () => (
  <div className="flex items-center h-screen bg-gray-300 justify-evenly">
    <Card title="Title" />
    <Card
      title="Title"
      size="lg"
      imgPosition="right"
      onSave={alert}
      onDelete={alert}
    />
  </div>
);

export default Exercise01;
