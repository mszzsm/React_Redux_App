Async Await.js

----coursesPage.js-----
-  handleDeleteCourse = course => {
+  handleDeleteCourse = async course => {

-    this.props.actions.deleteCourse(course).catch(error => {

+   try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {