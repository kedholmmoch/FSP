import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';

class UserEssaysIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      showUtility: false,
      essays: this.props.essays,
    }

    this.handleDelete2 = this.handleDelete2.bind(this);
    // this.showUtility = this.showUtility.bind(this);
    // this.closeUtility = this.closeUtility.bind(this);
    // this.toEditFromUtility = this.toEditFromUtility.bind(this);
  }

  componentDidMount() {
    this.props.fetchEssays({
      user_id: this.props.currentUser.id,
      filter: this.props.pageFilter
    }).then(() => {
      this.setState({ 
        essays: this.props.essays,
        isFetching: false 
        })
      })
  }

  // showUtility(essayId, event) {
  //   event.preventDefault();
  //   this.setState({
  //     showUtility: essayId,
  //   }, () => {
  //     document.addEventListener('click', this.closeUtility);
  //   });
  // }

  // closeUtility(event) {
  //   if (!this.utilityDOMel.contains(event.currentTarget)) {
  //     this.setState({
  //       showUtility: false,
  //     }, () => {
  //       document.removeEventListener('click', this.closeUtility);
  //     });
  //   }
  // }

  // toEditFromUtility(e, id){
  //   e.preventDefault();
  //   this.closeUtility()
  //     .then(() => this.props.history.push(`/users/${this.props.currentUser.id}/essays/${id}/edit`));
  // }

  // handleDelete(event, id) {
  //   event.preventDefault();
  //   this.setState({ isFetching: true });
  //   this.props.deleteEssay(id)
  //     .then(() => this.removeDeleted(id))
  //     .then(() => this.closeUtility());
  // }

  handleDelete2(id) {
    return (e) => {
      this.setState({ isFetching: true },
      () => {
        this.props.deleteEssay(id)
          .then(() => this.removeDeleted(id));
            // .then(() => this.closeUtility());
        }
      )
      // this.setState({
      //   essays: this.props.essays,
      //   isFetching: false,
      // }),
    }
  }

  removeDeleted(id) {
    let newEssays = this.state.essays.filter((essay) => {
      return essay.id != id;
    });

    this.setState({ essays: newEssays, isFetching: false });
  }


  render() {

    if (this.state.isFetching) {
      return null;
    }

    const { currentUser } = this.props;
    let { essays } = this.state;

    function compareUpdated(essayA, essayB) {
      let dateA = Date.parse(essayA.updated_at_string);
      let dateB = Date.parse(essayB.updated_at_string);
      return dateB - dateA;
    }

    let sortedEssays = essays.sort(compareUpdated)

    let essaysList = sortedEssays.map((essay, idx) => {
      
      let lastEdited = moment(essay["updated_at"]).fromNow();
      let minutesToRead = essay["minutes_to_read"];
      let wordCount = essay["word_count"];

      let utilityMenu;
      utilityMenu = (this.state.showUtility === essay.id) ? (
        <div className="utility"
          ref={(element) => {
            this.utilityDOMel = element;
          }}
        >
          {/* <button onClick={(e) => this.toEditFromUtility.bind(this, e, essay.id)}>Edit draft</button> */}
          {/* <button onClick={(e) => this.handleDelete.bind(this, e, essay.id)}>Delete draft</button> */}
          {/* <button onClick={this.handleDelete2(essay.id)}>Delete draft</button> */}
        </div>
      ) : null ;

      return (
        <li key={`user${currentUser.id}-essay${idx}`}>
          <div className="user-essay-index-item-super">
            <h3><Link to={`/users/${currentUser.id}/essays/${essay.id}/edit`}>
              {essay.title}</Link></h3>
            <div className="user-essay-index-preview-box">
              <p className="index-essay-preview">
                <Link to={`/users/${currentUser.id}/essays/${essay.id}/edit`}>
                  {essay.preview}</Link>
              </p>
            </div>
          </div>
          <div className="user-essay-index-item-sub">
            <div className="user-essay-index-item-info">
              <span className="user-essay-edit-count"> Last edited {lastEdited} {
                (wordCount === 0) ? <span></span> : 
                  <span>
                    &nbsp; &#183; &nbsp;
                    {minutesToRead} minute read ({wordCount} words) so far
                  </span>
                }
              </span>
            </div> 
            <div className="user-essay-index-item-options">
              <div className="edit-essay-button">
                <Link to={`/users/${currentUser.id}/essays/${essay.id}/edit`}>
                  Edit</Link>
              </div>
              <button className="delete-essay-button" onClick={this.handleDelete2(essay.id)}>Delete</button>
              {/* <button onClick={this.showUtility.bind(this, essay.id)}><i className="fas fa-chevron-down"></i></button>
              <div className="utility-background">
                {utilityMenu}
              </div> */}
            </div>
          </div>
        </li>
        )
      }
    );

    return (
      <div className="user-essay-index">
        <div className="user-index-topblank"></div>
        <section className="user-index-main">
          <div className="user-index-header">
            <div className="user-index-title">
              <h1>Your stories</h1>
            </div>
            <div className="user-index-header-buttons">
              {/* <div> Import a story </div>*/}
              <div className="user-index-new-story">
                <Link to={`/users/${currentUser.id}/essays/new`}>Write a story</Link>
              </div>
            </div>
          </div>
          <div className="user-index-nav-box">
            <nav className="user-index-nav">
              <ul>
                <li>
                  <NavLink to={`/users/${currentUser.id}/essays/drafts`}
                    activeClassName="user-index-tab">Drafts</NavLink>
                </li>
                <li>
                  <NavLink to={`/users/${currentUser.id}/essays/public`}
                    activeClassName="user-index-tab">Published</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="user-essays-list-container">
            <ul>
            {essaysList}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(UserEssaysIndex);