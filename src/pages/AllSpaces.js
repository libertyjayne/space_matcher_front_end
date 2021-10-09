import SpaceList from "../components/spaces/SpaceList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first Space",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Spacestreet 5, 12345 Space City",
    description:
      "This is a first, amazing Space which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second Space",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Spacestreet 5, 12345 Space City",
    description:
      "This is a first, amazing Space which you definitely should not miss. It will be a lot of fun!",
  },
];
function AllSpacesPage() {
  return (
    <section>
      <h1>All Spaces</h1>
      <SpaceList Spaces={DUMMY_DATA} />
    </section>
  );
}

export default AllSpacesPage;
