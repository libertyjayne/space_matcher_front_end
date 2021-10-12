import classes from './Landing.module.scss';
import './Landing.module.scss';
import img from '../../img/team_working_together.jpg';
import NavView from '../../layout/Nav/NavView';

function LandingView() {
  return (
 
    <div className={classes.wrapper}>
        <section className={classes.hero}>
          <div>
            <h1>Find Office Space to Share</h1>
          </div>
          <div>
            <img src={img} alt='team working together' />
          </div>
        </section>
        <section>Big section</section>
        <section>Big section</section>
      </div>
  );
}

export default LandingView;