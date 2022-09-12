const  postes_Model=require("../model/postes");

module.exports=async(req,res)=>{
    const catagory=req.params.data

    const DataUse=await postes_Model.findAll({
        where:{catagory:catagory}
    })
    res.json(DataUse);
}