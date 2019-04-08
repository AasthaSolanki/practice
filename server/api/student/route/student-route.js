import { studentController} from '../controller/student-controller'
export default class studentRoutes {
  static init(router){
    router
      .route('/student')
      .get(studentController.getAll)
    router
        .route('/student/:id')
        .get(studentController.getById)
    router
      .route('/student/insert')
      .post(studentController.createNew)
    router
      .route('/student/delete/:id')
      .delete(studentController.delete)
    router
      .route('/student/update/:id')
      .put(studentController.updateStudent)
  }
}
