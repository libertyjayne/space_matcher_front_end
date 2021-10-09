import NewSpaceForm from "../components/spaces/NewSpaceForm";

function NewSpacePage() {
  function addSpaceHandler(SpaceData) {
    //used to request http - vanilla js
    //would normally use axios
    fetch();
  }

  return (
    <section>
      <h1>Add New Space</h1>
      <NewSpaceForm onAddSpace={addSpaceHandler} />
    </section>
  );
}

export default NewSpacePage;
