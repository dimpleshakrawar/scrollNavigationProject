import PropTypes from "prop-types";

export default function ClientTestimonials({
  clientResponse,
  moveNextHandler,
  movePreviousHandler,
}) {
  return (
    <div className="p-5 mb-8">
      <h2 className="text-6xl max-sm:text-3xl text-center font-bold">
        Voices that prove our Excellence
      </h2>
      <div className="flex justify-center items-center content-between gap-4 p-[3rem] max-sm:p-1">
        <button
          onClick={movePreviousHandler}
          className="p-4 py-2 rounded-3xl border text-2xl max-sm:hidden"
        >
          &#8592;
        </button>
        <p className="text-4xl max-sm:text-2xl leading-snug w-[54rem] font-sans h-[13rem] p-4">
          {clientResponse[0]?.content}
        </p>
        <button
          onClick={moveNextHandler}
          className="px-4 py-2 rounded-3xl border text-2xl max-sm:hidden"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

ClientTestimonials.propTypes = {
  clientResponse: PropTypes.array,
  moveNextHandler: PropTypes.func,
  movePreviousHandler: PropTypes.func,
};
