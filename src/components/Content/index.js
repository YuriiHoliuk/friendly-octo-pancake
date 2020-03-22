import { connect } from 'react-redux';

import Content from './Content';

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(
  mapStateToProps,
)(Content);
