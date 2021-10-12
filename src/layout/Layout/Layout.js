import './Layout.module.scss';
import FooterView from '../Footer/FooterView';
import NavView from '../../layout/Nav/NavView';

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
