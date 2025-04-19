const Expert = ({ experts = [], addExpert }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {experts.map((expert) => (
        <div
          className="bg-gray-200 rounded-md text-center px-3 py-3 flex flex-col h-full"
          key={expert.id}
        >
          <img
            src={expert.img}
            alt=""
            className="rounded-full w-1/2 mx-auto  mb-5"
          />
          <h1 className="text-2xl">{expert.name}</h1>
          <p>
            <span className="font-semibold">Age:</span> {expert.age}
          </p>
          <p>
            <span className="font-semibold">Designation:</span>{" "}
            {expert.designation}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {expert.address}
          </p>
          <p>
            <span className="font-semibold">Salary:</span> ${expert.salary}
          </p>

          <div className="mt-auto pt-5">
            <button
              onClick={() => addExpert(expert)}
              className="bg-blue-500 px-2 py-1 rounded-sm text-white mx-auto"
            >
              Add to List
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expert;
