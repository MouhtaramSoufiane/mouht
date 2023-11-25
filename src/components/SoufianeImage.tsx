export const SoufianeImage = () => {
  return (
    <div className="bg-gray-300 group relative mx-auto mt-5  h-fit overflow-hidden rounded-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] shadow-md transition-all duration-300 ease-in-out sm:mt-0">
      <div className="absolute  -bottom-40 -top-40 left-10 right-10 animate-spin-slow bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
      <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#ffffff] sm:aspect-[9/12]">
        <img
          src="/assets/soufiane.jpeg"
          height="300px"
          width="300px"
          alt="Mouhtaram's Image"
          className="h-full bg-[#fff] object-cover"
        />
      </div>
    </div>
  );
};
