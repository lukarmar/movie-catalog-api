import { inject, injectable } from 'tsyringe'
import CatalogRepositoryInterface from '../../../../domain/catalog/repositories/catalog.repository.interface'
import CatalogEntity from '../../../../domain/catalog/entity/catalog-entity'


@injectable()
export default class GetAllUsersUseCase {
  
  constructor(
    @inject('CatalogRepository')
    private catalogRepository: CatalogRepositoryInterface
  ) {}

  async execute(): Promise<CatalogEntity[]> {

    const catalog = await this.catalogRepository.findAll()


    return catalog
  }

}