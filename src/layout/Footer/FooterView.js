import classes from "./Footer.module.scss";
import MainNavigation from "../MainNavigation";

function FooterView() {
  return (
    <footer className={classes.footer}>
      <div>Copyright © {new Date().getFullYear()}</div>
      <div>Space Matcher</div>
      <MainNavigation />
    {/* <a content='thanks' href='https://icons8.com/icon/47347/people'></a> */}
    </footer>
  );
}

export default FooterView;
