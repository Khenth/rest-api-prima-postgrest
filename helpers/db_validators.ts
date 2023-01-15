import db  from "../db/connection";


// const esRolValido =  async(rol = '')=>{
//     const existingRol = await Role.findOne({rol});
//     if(!existingRol){
//         throw new Error(`El rol ${rol} no existe`)
//     }
// }

export const existingEmail = async(email:string = '')=>{
const existingEmail = await db.user.findUnique({
    where: {email : email }
});

if(existingEmail){
   throw new Error(`Correo existente`)
}}


export const existingId = async(id:string)=>{

    const existingId = await db.user.findUnique({where:{id}});
    
    if(!existingId){
       throw new Error(`Id ${id} no existe`)
    }}
    
// const existeSpecie = async(id) =>{
//     const existeSpecie = await Specie.findById(id);

//     if(!existeSpecie){
//         throw new Error(`Id Specie ${id} no existe`)
//     }
// }
// const existeFarmCropHarvest = async(id) =>{
//     const existeFarmCropHarvest = await FarmCropHarvest.findById(id);

//     if(!existeFarmCropHarvest){
//         throw new Error(`Id FarmCropHarvest ${id} no existe`)
//     }
// }

// const existeVariety = async(id)=>{
//     const existeVariety = await Variety.findById(id);
//     if(!existeVariety){
//         throw new Error(`Id Varietyo ${id} no existe`)
//     }
// }

// const validatedCollections = (collection = '', collections = [])=>{

//     const include = collections.includes(collection);

//     if(!include){
//         throw new Error(`La coleccion ${collection} no es permitida, ${collections} `)
//     }

//     return true;
// }

