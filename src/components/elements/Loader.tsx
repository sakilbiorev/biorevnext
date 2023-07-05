// eslint-disable-next-line import/no-extraneous-dependencies

const Loader = ({ progress }: { progress: string }) => {
  return (
    <div className="fixed left-0 top-0 bg-black-0">
      <div className="text-lg">
        Loading
        <div className="text-red-500" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Loader;
