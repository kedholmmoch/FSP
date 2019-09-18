import React from 'react';
import { connect } from 'react-redux';

import EssayForm from './essay_form';
import { fetchEssay, updateEssay } from '../../actions/essay_actions';

const mapStateToProps = (state, ownProps) => {

  const defaultEssay = {title: '', body: ''};
  let essayId = ownProps.match.params.essayId;
  let essay = state.entities.essays[essayId]|| defaultEssay;

  return {
    currentUser: state.entities.users[state.session.id],
    essay: essay,
    formType: 'Update essay',
    isFetching: true,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    action: essay => dispatch(updateEssay(essay)),
    fetchEssay: id => dispatch(fetchEssay(id)),
  };
};

// class UpdateEssayForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isFetching: true,
//     }

//     // this.props.fetchEssay(this.props.match.params.essayId)
//       // .then(() => this.state({ isFetching: false }))
//   }

//   componentDidMount() {
//     this.props.fetchEssay(this.props.match.params.essayId)
//       .then(this.setState({ isFetching: false }));
//     // if (this.props.essay) {
//     //   this.setState({ isFetching: false});
//     // }
//   }

//   // componentDidUpdate(prevProps) {
//   //   if (prevProps.essay.id != this.props.match.params.essayId) {
//   //     this.props.fetchEssay(this.props.match.params.essayId);
//   //   }
//   // }

//   render() {

//     const { action, essay } = this.props;

//     return (
//       <div>
//         { (this.state.isFetching) ? null : (
//         <EssayForm 
//           action={action}
//           essay={essay}
//         />
//         )}
//       </div>
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);