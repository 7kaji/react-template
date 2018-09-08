import { connect } from 'react-redux';
import App from '../components/App';
import { minus, plus } from '../actions';

const mapStateToProps = (state) => {
  const n = Math.sign(state.number) === -1 ? 0 : state.number;
  return (
    {
      number: state.number,
      title: `${state.title} ${'!'.repeat(n)}`,
    }
  );
};

const mapDispatchToProps = dispatch => (
  {
    plus: num => dispatch(plus(num)),
    minus: num => dispatch(minus(num)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
