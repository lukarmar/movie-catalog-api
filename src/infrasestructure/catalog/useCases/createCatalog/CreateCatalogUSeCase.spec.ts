import CatalogEntity from '../../../../domain/catalog/entity/catalog-entity';
import CatalogRepositoryFakeImplementation from '../../repositories/fake-implementations/catalog.repository.fakeImplementation';


import CreateCatalogUseCase from '../createCatalog/CreateCatalogUseCase';


let catalogRepositoryFakeImplementation: CatalogRepositoryFakeImplementation
let createCatalogUseCase: CreateCatalogUseCase;


describe("Create Catalog", () => {

  beforeEach(() => {

    catalogRepositoryFakeImplementation = new CatalogRepositoryFakeImplementation();
    createCatalogUseCase = new CreateCatalogUseCase(catalogRepositoryFakeImplementation);
    

  })

  it("should be able to create catalog", async () => {
    
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


    
    const catalog = await createCatalogUseCase.execute(newCatalog);
    
    
    expect(catalog).toHaveProperty("id");


  });

});