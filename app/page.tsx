import Feed from "@components/Feed";

const Home = () => {
  return (
    <section
      className="w-full flex-center flex-col
  "
    >
      <h1 className="head_text text-center">
        Explore & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Shearer.ai is an open-source AI prompting tool for morden world to
        explore, create and share creative prompts
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
