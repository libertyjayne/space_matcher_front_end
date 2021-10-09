import FooterView from '../Footer/FooterView';

function MainLayoutView(props) {
  return (
    <div>
      <main>{props.children}</main>
      <FooterView />
    </div>
  )
}

export default MainLayoutView;