let { users } = require('../usersData');



const getUsers = (req, res)=>{
    res.status(200).json({ success: true, data:  users})
    
  }

const createUser =  (req,res)=>{
    const {name} = req.body
    if(!name){
      return res.status(400).json({success:false,msg:'pleaese provide name value'})
    }
    res.status(201).send({ success: true, user: name})
  }

  //   const updateUser = (req,res)=>{
  //   const { id } = req.params;
  //   const { name } = req.body;
  //   // console.log(id, name);
  //   // res.send('Hello world')
  //   if (!name) {
  //     return res.status(400).json({ success: false, msg: 'Please provide the "name" value' });
  //   }
  //   const user = users.find((user)=> user.id === Number(id))
  //   if(!user){
  //     return res.status(404).json({success:false, msg:'No user with id:'+' '+id})
  //   }
  //   const newUsers = users.map((user)=>{
  //     if(user.id === Number(id)){
  //       user.name = name;
  //     }
  //     return user;
  //   });
  //   res.status(200).json({success:true, data: newUsers})
  // }

  const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    if (!name) {
      return res.status(400).json({ success: false, msg: 'Please provide the "name" value' });
    }
  
    const user = users.find((user) => user.id === Number(id));
  
    if (!user) {
      return res.status(404).json({ success: false, msg: 'No user with id: ' + id });
    }
  
    const newUsers = users.map((user) => {
      if (user.id === Number(id)) {
        user.name = name;
      }
      return user;
    });
  
    res.status(200).json({ success: true, data: users });
  };
  









  const deleteUser = (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));
    if (!user) {
      return res
        .status(404)
        .json({ success: false, msg: `No user with id: ${req.params.id}` });
    }
    const newUsers = users.filter((user) => user.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newUsers });
  };
  
  

 


  module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}