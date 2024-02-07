import PropTypes from "prop-types";

export default function AllClients({
  selectedIndex,
  setSelectedIndex,
  client,
}) {
  return (
    <div
      className={`${
        selectedIndex === client?.id
          ? "absolute right-[43%] bottom-[-13%] bg-white"
          : ""
      } flex  gap-4 `}
      key={client?.id}
    >
      <div
        className="w-[4.5rem]
            "
        onClick={() => setSelectedIndex(client?.id)}
      >
        <img
          src={client?.image}
          width={"100%"}
          className="rounded-full object-cover h-[75px]"
        />
      </div>
      <div>
        <p className="text-xl font-semibold mb-2">
          {client?.id === selectedIndex && client?.name}
        </p>
        <p>{client?.id === selectedIndex && client?.position}</p>
        <p>{client?.id === selectedIndex && client?.task}</p>
      </div>
    </div>
  );
}

AllClients.propTypes = {
  selectedIndex: PropTypes.number,
  client: PropTypes.object,
  setSelectedIndex: PropTypes.func,
};
