import { studentDao } from '../DAO/student-dao'
export default class studentController{
  static getAll(req,res){
    console.log("gett")
    studentDao
      .getAll()
      .then(students=>res.status(200).json(hospitals))
      .catch(error=>res.status(400).json(error));

  }
static getById(req,res){
console.log('in Controller');
let _id= req.params.id;
studentDao.getById(_id).then((users)=>{
  res.status(200).json(details).send(details);
})
  .catch((error=>res.json(error)))
}

static createNew(req,res)
{
  let _req=req.body;
  studentDao.createNew(_req).then((details)=>{
    res.status(200).json(details).send(details);
  })
    .catch(error=>res.json(error))
}
  static delete(req,res)
  {
    let _req = req.params.id;
    studentsDao.delete(_req).then((deletestudent) => {
      res.status(200).json(deletestudent).send(deletestudent);
    })
      .catch(error => res.json(error))
  }

  static updateStudent(req,res)
  {
    let id = req.params.id;
    let _req = req.body;
    studentsDao.updateStudent(_req,id).then((updates) => {
      res.status(200).json(updates).send(updates);
    })
      .catch(error => {res.status(400).json(error)})
  }
}
