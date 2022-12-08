import { container } from 'tsyringe'

import CatalogRepositoryInterface  from '../../domain/catalog/repositories/catalog.repository.interface'
import CatalogRepository from '../catalog/repositories/implementations/catalog.repository'


container.registerSingleton<CatalogRepositoryInterface>(
  'CatalogRepository',
  CatalogRepository
)


