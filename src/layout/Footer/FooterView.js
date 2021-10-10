import classes from "./Footer.module.scss";

function FooterView() {
  return (
    <footer className={classes.footer}>
      <div>Copyright © {new Date().getFullYear()}</div>
      <div>Space Matcher</div>
    </footer>
  );
}

export default FooterView;
