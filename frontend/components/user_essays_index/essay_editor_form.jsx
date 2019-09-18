// OUT OF DATE -- CREATED NEW FILES!!!

// import React from 'react';
// import {withRouter} from 'react-router-dom';

// class EssayEditorForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       essay: this.props.essay,
//       formType: this.props.formType,
//       isFetching: true
//     }

//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     console.log("Is this working?")
//     this.props.fetchEssay(this.props.match.params.essayId)
//       .then(this.setState({ isFetching: false }));
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.essayId != this.props.match.params.essayId) {
//       console.log("Component did Update");
//       this.props.fetchEssay(this.props.match.params.essayId);
//     }
//   }

//   handleChange(input) {
//     return (e) => {
//       this.setState({ essay: { [input]: e.target.value }});
//     } 
//   }

//   render() {

//     if (!this.props.essay) {
//       return null;
//     }

//     console.log(this.props.essay);
//     console.log(this.state);

//     return(
//       <div >
//         <div>
//         <form>
//           <label>Title
//             <input id="essay-form-title-input"
//               type="text" value={this.props.essay.title} onChange={this.handleChange('title')}/>
//           </label>
//           <label>Body
//             <input id="essay-form-body-input"
//               type="text" value={this.props.essay.body} onChange={this.handleChange('body')}/>
//           </label>
//         </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default withRouter(EssayEditorForm);