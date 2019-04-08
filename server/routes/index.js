import TodoRoutes from "../api/todo/route/todo-route";

import studentRoutes from "../api/student/route/student-route"
import subjectRoutes from "../api/subject/route/subject-route"
export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     studentRoutes.init(router);
     subjectRoutes.init(router)
     app.use("/", router);
   }
}
