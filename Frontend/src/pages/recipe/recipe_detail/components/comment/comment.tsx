const Comment = () => {
  return (
    <div className="flex">
      <div className="mr-2">
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className=" inline-block w-10 h-10 rounded-full"
          alt=""
        />
      </div>
      <div>
        <h1>
          <span>John Doe</span>
        </h1>
        <h2>
          <span>August 1, 2021</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima magni nulla, ab voluptas dolores commodi cumque qui repellendus
          nostrum illum velit modi sint officiis consequatur perspiciatis
          similique ducimus dolore? Perferendis!
        </p>
      </div>
    </div>
  );
};

export default Comment;
