
API_CALL_ERROR adding

actionTypes.js
	export const API_CALL_ERROR = "API_CALL_ERROR";
-----------------------------------------------------------------
apiStatusAction.js
	export function apiCallError() {
  		return { type: types.API_CALL_ERROR };
	}
-----------------------------------------------------------------
courseActions.js
	+import { -||-, apiCallError } from "./apiStatusActions";
	-||-
  func. saveCourse(course)
	  .catch(error => {
    +   dispatch(apiCallError(error));
        throw error;
      });


  func. LoacCourse(course)
   .catch(error => {
    +   dispatch(apiCallError(error));
        throw error;
      });
-----------------------------------------------------------------
apiStatusReduced.js
	if (action.type == types.BEGIN_API_CALL) {
    return state + 1;
  + } else if (actionTypeEndsInSuccess(action.type)) {
  + } else if (
  +   action.type === types.API_CALL_ERROR ||
  	  actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }
-----------------------------------------------------------------

authorAction.js
  +import { -||-, apiCallError } from "./apiStatusActions";

  export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
@ -15,6 +15,7 @@ export function loadAuthors() {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
+        dispatch(apiCallError(error));
        throw error;
      });
  };
-----------------------------------------------------------------
  