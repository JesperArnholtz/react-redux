import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/course-actions';
import CourseForm from './course-form';
import {browserHistory} from 'react-router';

class ManageCourse extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(event){ 
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course:course});
  } 

  saveCourse(event){ 
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    browserHistory.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}//=Authorsformatted!!
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors} />
    );
  }
}

// Pull in the React Router Context 
// so router is available on this.context.router
ManageCourse.contextTypes = { 
  router: PropTypes.object
};

ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  //empty course to start with
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  //Here we expose the Authors to state
  const authorsFormatted = state.authorReducer.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorsFormatted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);