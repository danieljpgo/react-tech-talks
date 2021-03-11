import type { Children } from '../../../common/types/children';

// components/Card/CardHeader/index.tsx
type CardHeaderProps = Children;

const CardHeader = ({ children }: CardHeaderProps) => (
  <h3 className="text-2xl text-gray-500">{children}</h3>
);

// components/Card/CardContent/index.tsx
type CardContentProps = Children;

const CardContent = ({ children }: CardContentProps) => (
  <div className="grid grid-cols-3 gap-6">
    {children}
  </div>
);

// components/Card/index.tsx
type CardProps = Children;

const Card = ({ children }: CardProps) => (
  <div className="grid gap-6 p-8 bg-white rounded-md shadow-md">
    {children}
  </div>
);

type CardActionsProps = Children;

const CardActions = ({ children }: CardActionsProps) => (
  <div className="flex gap-6">
    {children}
  </div>
);

const Final01 = () => {
  function handleCardClick(position: number) {
    alert(`Click no card ${position}`);
  }

  return (
    <div className="grid h-screen grid-cols-2 bg-gray-300 place-items-center">
      <div className="max-w-sm">
        <Card>
          <CardHeader>Title</CardHeader>
          <hr />
          <CardContent>
            <div className="bg-gray-400 rounded-md" />
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              repudiandae magnam illo blanditiis?
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-lg">
        <Card>
          <CardHeader>Title</CardHeader>
          <hr />
          <CardContent>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              repudiandae magnam illo blanditiis?
            </p>
            <div className="bg-gray-400 rounded-md" />
            <div className="bg-gray-400 rounded-md" />
          </CardContent>
          <CardActions>
            <button
              type="button"
              className="block w-full p-1 text-gray-500 uppercase border-2 border-gray-400 rounded-md shadow-sm // focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onClick={() => handleCardClick(2)}
            >
              Save
            </button>
            <button
              type="button"
              className="block w-full p-1 text-gray-500 uppercase border-2 border-gray-400 rounded-md shadow-sm // focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onClick={() => handleCardClick(2)}
            >
              Delete
            </button>

          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Final01;
