import CatalogEntity from '../../../../domain/catalog/entity/catalog-entity';
import CatalogRepositoryFakeImplementation from '../../repositories/fake-implementations/catalog.repository.fakeImplementation';


import CreateCatalogUseCase from '../createCatalog/CreateCatalogUseCase';
import GetAllCatalogUseCase from './GetAllCatalogUseCase';


let catalogRepositoryFakeImplementation: CatalogRepositoryFakeImplementation
let createCatalogUseCase: CreateCatalogUseCase;
let getAllCatalogUseCase: GetAllCatalogUseCase


describe("List all Catalogs", () => {

  beforeEach(() => {

    catalogRepositoryFakeImplementation = new CatalogRepositoryFakeImplementation();
    createCatalogUseCase = new CreateCatalogUseCase(catalogRepositoryFakeImplementation);
    getAllCatalogUseCase = new GetAllCatalogUseCase(catalogRepositoryFakeImplementation);
    

  })

  it("should be able to list all catalogs", async () => {
    
    const dataCatalog = {
      id: "1234567",
      title: "Star Wars",
      description: "A long time ago in a galaxy far, far away...",
      director: "George Lucas",
      producer: "Lucasfilm",
      banner: "https://www.google.com.br",

    }



    const newCatalog = new CatalogEntity(
      dataCatalog.id,
      dataCatalog.title,
      dataCatalog.description,
      dataCatalog.director,
      dataCatalog.producer,
      dataCatalog.banner
    );


    
    await createCatalogUseCase.execute(newCatalog);
    
    
    const catalogs = await getAllCatalogUseCase.execute();

    expect(catalogs).toEqual([newCatalog]);


  });

});