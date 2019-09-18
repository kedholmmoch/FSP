import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
    this.props.action(essay)
      .then(() => this.props.history.push(`/users/${currentUser.id}/essays/drafts`));
  }

  render(){

    if (!this.state.essay) {
      return null;
    }

    const {currentUser} = this.props;

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
                  {/* <Link className="form-process-button" 
                    to={`/users/${currentUser.id}/essays/drafts`}
                    onClick={this.handleSubmit}>
                    {this.props.formType}</Link> */}
                <input className="form-process-button"
                  type="submit" value={`${this.props.formType}`}
                />
                <div className="title-sizing-div">
                  <label className="essay-form-title">
                    <textarea placeholder="Title" value={this.state.essay.title} onChange={this.handleChange('title')}/>
                  </label>
                </div>
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