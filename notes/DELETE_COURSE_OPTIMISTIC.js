DELETE_COURSE_OPTIMISTIC
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";

----courseActions.js----

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}


export function deleteCourse(course) {
  return function(dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}

----actionTypes.js----
+ export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";

----courseReducer.js----
+    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);

----CoursesPage.js----

	handleDeleteCourse = course => {
	    toast.success("Course deleted");
	    this.props.actions.deleteCourse(course).catch(error => {
	      toast.error("Delete failed. " + error.message, { autoClose: false });
	    });
	  };


	<CourseList
	  onDeleteClick={this.handleDeleteCourse}
	  courses={this.props.courses}
	/>

    deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)

----CoursesList.js----
	+ const CourseList = ({ -||-, onDeleteClick }) => ( -|| -

	 	<th>Title</th>
        <th>Author</th>
        <th>Category</th>
    +   <th />


		<td>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDeleteClick(course)}
          >
            Delete
          </button>
        </td>

    +  	courses: PropTypes.array.isRequired,
  	+ 	onDeleteClick: PropTypes.func.isRequired
