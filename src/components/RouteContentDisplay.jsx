export default function RouteContentDisplay(routeData) {
  return (
    <div className="flex max-sm:flex-col gap-4 p-6">
      <div className="w-[50%] max-sm:w-[100%]">
        <img
          src={routeData.routeData.gifLink}
          className="w-full h-[20rem] rounded-xl"
        />
      </div>
      <div className="w-[50%] max-sm:w-[100%] p-2">
        <h2 className="text-3xl mb-6">{routeData.routeData.label}</h2>
        <p className="text-lg text-gray-400 mb-4">
          {routeData.routeData.subHeading}
        </p>
        <div className="flex lg:flex-wrap flex-col gap-1 max-h-[12rem] max-sm:max-h-[55rem]">
          {routeData.routeData.data.map((list, id) => (
            <div key={id}>
              <p
                className={` text-white text-xs inline-block rounded-full px-1 mx-2`}
                style={{ backgroundColor: routeData.routeData.color }}
              >
                &rarr;
              </p>
              <span className="text-lg">{list}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
