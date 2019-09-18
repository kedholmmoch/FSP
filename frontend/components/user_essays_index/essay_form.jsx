import React from 'react';
import { withRouter } from 'react-router-dom';

class EssayForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      essay: {
        title: '',
        body: '',
      },
      isFetching: this.props.isFetching,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // if (this.props.currentUser.id !== this.props.match.params.userId) {
    //   this.props.history.push('/');
    // }
  }

  componentDidMount(){
    if (this.props.formType === 'Update essay') {
      this.props.fetchEssay(this.props.match.params.essayId)
        .then(() => {
          this.setState({
            essay: this.props.essay,
            isFetching: false,
          });
        }
      )
    }
  }

  handleChange(field) {
    return (e) => {
      const newEssay = Object.assign({}, this.state.essay);
      newEssay[field] = e.target.value;
      this.setState({ essay: newEssay});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentUser = this.props.currentUser;
    const essay = Object.assign({}, this.state.essay);
    this.props.action(essay);
    this.props.history.push(`/users/${currentUser.id}/essays/drafts`)
  }

  render(){

    if (!this.state.essay) {
      return null;
    }

    console.log("PROPS")
    console.log(this.props.essay);
    console.log("STATE")
    console.log(this.state.essay);

    return(
      <article className="essay-form-box">
        <div className="post-article-content">
          <div className="essay-form-content">
            <div className="essay-form-inner">
              { (this.state.isFetching) ? null : (
              <form className="essay-form-form" onSubmit={this.handleSubmit}>
                <input className="form-process-button"
                  type="submit" value={`${this.props.formType}`}
                />
                <label className="essay-form-title">
                  <input type="text" placeholder="Title" value={this.state.essay.title} onChange={this.handleChange('title')}/>
                </label>
                <label className="essay-form-body">
                  <textarea placeholder="&nbsp; Tell your story" value={this.state.essay.body || ''} onChange={this.handleChange('body')}/>
                </label>
              </form>
              )}
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default withRouter(EssayForm);