import { inject, injectable } from 'tsyringe'
import CatalogsEntity from '../../../../domain/catalog/entity/catalog-entity'
import CatalogRepositoryInterface from '../../../../domain/catalog/repositories/catalog.repository.interface'


@injectable()
export default class CreateCatalogUseCase {
  
  constructor(
    @inject('CatalogRepository')
    private catalogRepository: CatalogRepositoryInterface
  ) {}

  async execute(dataCatalog: CatalogsEntity): Promise<CatalogsEntity> {


    const catalogExists = await this.catalogRepository.findByTitle(dataCatalog.title)

    if(catalogExists) {
      const updatedCatalog = await this.catalogRepository.update(catalogExists.id, dataCatalog)

      return updatedCatalog;

    }
    
   
    const catalog = await this.catalogRepository.create(dataCatalog)

    return catalog
  }

}