import { connect } from 'react-redux';
import Progressbar from '../components/layout/progressbar/Progressbar';
import { RootState } from '../store';

const mapStateToProps = (state: RootState) => ({
  progressbarState: state.progressbar,
});

export default connect(mapStateToProps)(Progressbar);
