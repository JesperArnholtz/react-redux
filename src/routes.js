import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import Courses from './components/course/courses';
import ManageCourse from './components/course/manage-course';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="courses" component={Courses} />
        <Route path="course" component={ManageCourse} /> 
        <Route path="course/:id" component={ManageCourse} /> 
    </Route>
);
