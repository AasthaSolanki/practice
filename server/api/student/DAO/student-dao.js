import Promise from 'bluebird';
import model from '../../../models';

export default class studentDao{
  static getAll(){
    return new Promise((resolve,reject)=>{
      model.Student.findAndCountAll()
        .then(student_details=>{
          console.log("---->",student_details)
          resolve(student_details);
        },(error)=>{reject(error);})
      })
  }
  static getById(_id){
    return new Promise((resolve,reject)=>{
      models.Student.findAll({
        where:{
          id:_id
        }
      })
        .then(student=>{
          console.log("getbyid=",_id);
          resolve(students)},(error)=>{
            reject(error)
        })
    })
  }
  static delete(id){
    return new Promise((resolve,reject)=>{
      models.Student.destoy({
        where:
          {
            _id:id
          }
      }).then(deletestudent=>{
        console.log(deletestudent);
        resolve(deletestudent);},
        (error)=>{
        reject(error);
      });
    }) ;
  }
  static updateStudent(req,id){
    return new Promise((resolve,reject)=>{
      models.Student.update({
        subject:req.subject},
        {
          where:
            {
              _id:id
            }
      })
        .then(updates=>{
          resolve(updates);},(error)=>{
          reject(error);
        });
        });
  }
}
