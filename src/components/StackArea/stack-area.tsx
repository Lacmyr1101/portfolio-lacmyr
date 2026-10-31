import StackGroup from "./stack-group";

function StackArea() {
  return (
    <>
      <section className="stack-area w-full">
        {/* <h2 className="text-7xl font-bold my-4 xl:scale-125">Tech Stack</h2> */}
        <div className="carousel-frame">
          <div className="carousel-container transform scale-90 md:scale-100 border-x-2 border-gray-200">
            <StackGroup />
            <StackGroup />
            <StackGroup />
          </div>
          <div className="carousel-overlay" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}

export default StackArea;
