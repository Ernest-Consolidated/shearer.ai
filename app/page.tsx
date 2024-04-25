import Features from "@components/Features";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section
      className="w-full flex-center flex-col
      "
    >
      <div className="hidden mt-5 sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{" "}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <h1 className="head_text text-center">
        Explore & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI - Hiring Manager</span>
      </h1>
      <p className="desc text-center mt-6">
        NeuraTalent.ai is an innovative AI-driven interview platform
        revolutionizing the hiring process with a seamless and insightful
        interview journey.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>

      <Features />
      {/* Feed */}
      {/* <Feed /> */}
    </section>
  );
};

export default Home;
