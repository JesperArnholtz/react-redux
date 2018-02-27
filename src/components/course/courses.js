import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/course-actions';
import CourseList from './course-list';

class Courses extends React.Component { 
    constructor(props, context){ 
        super(props, context);
        // this.state = { 
        //     course: { title: "" }
        // };

        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
    }

    // onTitleChange(event){ 
    //     const course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({course: course});
    // }

    // onClickSave(){ 
    //     //alert(`Saving ${this.state.course.title}`);
    //     //this.props.dispatch(courseActions.createCourse(this.state.course));
    //     this.props.actions.createCourse(this.state.course); //Afhængig af mapDispatchToProps i bunden
    //                                                 //Hvis den ikke er med brug syntaksen ovenover
    // }

    // courseRow(course, index){ 
    //     return <div key={index}>{course.title}</div>;
    // }

    render(){ 
        return(
            <div>
                <h1>Courses</h1>
                {/* {this.props.courses.map(this.courseRow)} */}
                <CourseList courses={this.props.courses} />
                {/* <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    onClick={this.onClickSave}
                    value="Save"
                /> */}
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