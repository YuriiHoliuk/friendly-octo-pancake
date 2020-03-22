import { connect } from 'react-redux';
import App from './App';
import { startLoading, recievCategories } from '../../store/actions';

const mapDispatchToProps = {
  startLoading, recievCategories,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
