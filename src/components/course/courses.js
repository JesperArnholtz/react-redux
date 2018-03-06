import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/course-actions';
import CourseList from './course-list';
import {browserHistory} from 'react-router';

class Courses extends React.Component { 
    constructor(props, context){ 
        super(props, context);

         this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
    }


    redirectToAddCoursePage(){ 
        browserHistory.push('/course');
    }

    render(){ 
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
                <input
                    type="submit"
                    onClick={this.redirectToAddCoursePage}
                    value="Add Course"
                    className="btn btn-primary"
                /> 
            </div>
        );
    }
}

Courses.propTypes = { 
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired 
};

function mapStateToProps(state, ownProps){ 
    return  {
        courses: state.courseReducer
    };
}

function mapDispatchToProps(dispatch){ 
    return  { 
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);