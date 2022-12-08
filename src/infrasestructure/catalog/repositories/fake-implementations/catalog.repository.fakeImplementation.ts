import {v4 as uuid} from 'uuid'

import CatalogEntity from "../../../../domain/catalog/entity/catalog-entity";
import CatalogRepositoryInterface from "../../../../domain/catalog/repositories/catalog.repository.interface";


export default class CatalogRepositoryFakeImplementation implements CatalogRepositoryInterface {

    private catalogs: CatalogEntity[] = [];



    update(id: string, dataUpdate: CatalogEntity): Promise<CatalogEntity> {
      
      const catalogIndex = this.catalogs.findIndex(catalog => catalog.id === id);

      const catalog = this.catalogs[catalogIndex];

      const catalogUpdated = Object.assign(catalog, dataUpdate);

      this.catalogs[catalogIndex] = catalogUpdated;

      return Promise.resolve(catalogUpdated);


    }



    async findByTitle(title: string): Promise<CatalogEntity> {

      const catalog = await this.catalogs.find(catalog => catalog.title === title);

      return catalog;
    }
    
  

   
    async create(newCatalog: CatalogEntity): Promise<CatalogEntity> {

      
      const {id, title, description, director, producer, banner } = newCatalog;


      const catalog = new CatalogEntity(id, title, description, director, producer, banner);

      await this.catalogs.push(catalog);

      return catalog;


    }
  
    async findAll(): Promise<CatalogEntity[]> {

      const findAllVehicles = this.catalogs;

      return findAllVehicles;
    }

}