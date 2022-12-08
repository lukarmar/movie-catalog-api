export default class Catalog {
  private _id: string;
  private _title: string;
  private _description: string;
  private _director: string;
  private _producer: string;
  private _banner: string;


  constructor(
    id: string,
    title: string,
    description: string,
    director: string,
    producer: string,
    banner: string,
    ) {

      this._id = id;
      this._title = title;
      this._description = description;
      this._director = director;
      this._producer = producer;
      this._banner = banner;
    }

    get id(): string {
      return this._id;
    }
    get title(): string {
      return this._title;
    }
    get description(): string {
      return this._description;
    }
    get director(): string {
      return this._director;
    }
    get producer(): string {
      return this._producer;
    }
    get banner(): string {
      return this._banner;
    }
    
  
}

