import Image from 'next/image';

const Loader = ({ progress }: { progress: string }) => {
  const beforeStyle = {
    bottom: `${progress}%`,
  };
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black-3 transition-all duration-300 ease-linear">
      <div className="flex flex-col justify-center text-base text-white-0 max-md:text-sm">
        <div className="relative overflow-hidden">
          <Image
            alt="loader logo"
            src="/images/biorev-main-icon.png"
            className="max-md:h-auto max-md:w-9"
            width={64}
            height={64}
          />
          <span
            className="absolute h-full w-full bg-black-3 opacity-50"
            style={beforeStyle}
          />
        </div>
        <div className="h-1 text-center text-white-0">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
