import NavView from '../Nav/NavView';
import './Layout.module.scss';
import FooterView from '../Footer/FooterView';

function Layout(props) {
  return (
    <div>
      <NavView />
      <main>{props.children}</main>
      <FooterView />
    </div>
  );
}

export default Layout;
