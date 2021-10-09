import SpaceItem from "./SpaceItem";
import classes from "./SpaceList.module.css";

function SpaceList(props) {
  return (
    <ul className={classes.list}>
      {props.Spaces.map((Space) => (
        <SpaceItem
          key={Space.id}
          image={Space.image}
          title={Space.title}
          address={Space.address}
          description={Space.description}
        />
      ))}
    </ul>
  );
}

export default SpaceList;
