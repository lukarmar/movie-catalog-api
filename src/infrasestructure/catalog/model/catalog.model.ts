import {Schema, model} from "mongoose";
import CatalogEntity from "../../../domain/catalog/entity/catalog-entity";


const catalogSchema = new Schema<CatalogEntity>({
  // id: {type: "String", required: true, default: uuid()},
  
  // _id: {type: "String",  default: function genUUID() {
  //   return uuid()
  // }},
  title: { type: "String", required: true },
  description: { type: "String", required: true },
  director: { type: "String", required: true },
  producer:  { type: "String", required: true },
  banner:  { type: "String", required: true },
},

{
  timestamps: true,
 
})

export default model("Catalogs", catalogSchema)

