import StackGroup from "./stack-group";

function StackArea() {
  return (
    <>
      <section className="stack-area w-full">
        <h2 className="text-6xl font-bold mb-4">Tech Stack</h2>
        <div className="carousel-container">
          <StackGroup />
          <StackGroup />
        </div>
      </section>
    </>
  );
}

export default StackArea;
