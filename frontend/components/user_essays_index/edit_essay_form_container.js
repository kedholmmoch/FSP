//   OUT OF DATE -- REPLACED WITH NEW FILES!


// import React from 'react';
// import { connect } from 'react-redux';

// import EssayEditorForm from './essay_editor_form';
// import { updateEssay, fetchEssay } from '../../actions/essay_actions';

// const mapStateToProps = (state, ownProps) => {

//   console.log(ownProps.match.params.essayId);

//   let essayId = ownProps.match.params.essayId;

//   console.log(state.entities);

//   let essay = state.entities.essays[essayId];

//   return {
//     formType: 'Update Essay',
//     essay: essay,
//   };
// };

// const mapDispatchToProps = dispatch => {

//   return {
//     processForm: (essay) => dispatch(updateEssay(essay)),
//     fetchEssay: (id) => dispatch(fetchEssay(id)),
//   };
// };

// // class EditEssayForm extends React.Component{
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       isFetching: true
// //     }
// //   }

// //   componentDidMount() {
// //     this.props.fetchEssay(this.props.match.params.essayId)
// //       .then(this.setState({ isFetching: false }));
// //   }

// //   render() {

// //     const { essay, formType, processForm } = this.props;
// //     const { isFetching } = this.state;

// //     return (
// //       <div>
// //         { (isFetching) ? (<span></span>) : (
// //           <EssayEditorForm
// //             essay={essay}
// //             formType={formType}
// //             processForm={processForm}
// //           />
// //         )}
// //       </div>
// //       )
// //     }
// //   }
  
// export default connect(mapStateToProps, mapDispatchToProps)(EssayEditorForm);