import CatalogEntity from "../../../../domain/catalog/entity/catalog-entity";
import CatalogRepositoryInterface from "../../../../domain/catalog/repositories/catalog.repository.interface";

import catalogModel from '../../model/catalog.model';


export default class CatalogRespoitory implements CatalogRepositoryInterface {
 

  async findAll(): Promise<CatalogEntity[]> {

    const catalogs = await catalogModel.find()

    return catalogs;  
  }

  
  
  async create(entity: CatalogEntity): Promise<CatalogEntity> {
    const catalog = await catalogModel.create(entity)

    return catalog

  }

  async findByTitle(title: string): Promise<CatalogEntity | undefined> {

    const catalog = await catalogModel.findOne({ title }).exec()

    return catalog

  }


  async update(id: string, dataUpdate: CatalogEntity): Promise<CatalogEntity> {
    
    await catalogModel.updateOne({_id: id }, dataUpdate).exec()
    
    const catalog = await catalogModel.findOne({ id }).exec()

    return catalog
  }
  
}