import classes from "./Footer.module.scss";

function FooterView() {
  return (
    <footer className={classes.footer}>
      <div>2021</div>
      <div>Copyright: yourcompany.com! All Rights Reserved</div>
    </footer>
  );
}

export default FooterView;
