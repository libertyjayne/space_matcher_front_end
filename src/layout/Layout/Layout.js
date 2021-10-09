import MainNavigation from '../MainNavigation';
import './Layout.module.scss';
import FooterView from '../Footer/FooterView';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
      <FooterView />
    </div>
  );
}

export default Layout;
