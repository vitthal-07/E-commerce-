const NewsLetterBox = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed");
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-text">
        Subscribe now & get 20% off
      </p>
      <p className="text-secondary mt-3">
        Lorem ipsum dolor sit. Amet, consectetur adipisicing elit.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full outline-none sm:flex-1 bg-transparent text-text"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-primary text-text text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
