import React from 'react';

class EssayShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.essay;
  }

  componentDidMount(){
    this.props.fetchEssay(this.props.match.params.essayId);
  }

  // componentDidUpdate(prevProps){
  //   if (prevProps.essay.id != this.props.match.params.essayId) {
  //     this.props.fetchEssay(this.props.match.params.essayId)
  //   }
  // }

  render(){

    const {essay} = this.props;

    if (!essay) {
      return <div> </div>
    }

    return(
      <div>
        {essay.title}
        <br/>
        {essay.summary}
        <br/>
        {essay.author}
        <br/>
        {essay.body}  
      </div>
    )
  }
}

export default EssayShow;