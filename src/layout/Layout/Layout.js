import MainNavigation from '../MainNavigation';
import UserNavView from '../UserNav/UserNavView';
import './Layout.module.scss';
import FooterView from '../Footer/FooterView';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <UserNavView />
      <main>{props.children}</main>
      <FooterView />
    </div>
  );
}

export default Layout;
