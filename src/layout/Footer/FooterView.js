import classes from "./Footer.module.scss";
import MainNavigation from "../MainNavigation";

function FooterView() {
  return (
    <footer className={classes.footer}>
      <div>Copyright © {new Date().getFullYear()}</div>
      <div>Space Matcher</div>
      <MainNavigation />
      {/* <a content='thanks' href='https://icons8.com/icon/47347/people'></a> */}
      <a href="https://www.freepik.com/photos/business">Business photo created by rawpixel.com - www.freepik.com</a>
      <a href='https://www.vecteezy.com/free-photos'>
        Free Stock photos by Vecteezy
      </a>
    </footer>
  );
}

export default FooterView;
