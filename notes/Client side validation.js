Client side validation 

manageCourse.js
    // return boolean value
  +function formIsValid() {
    const { title, authorId, category } = course;
    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!authorId) errors.author = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

-||-
  
  function handleSave(event) {
    event.preventDefault();
  + if (!formIsValid()) return; //when is no valid, end function immediately
    setSaving(true);
    saveCourse(course)
      .then(() => {

-----------------------------------------------------------------