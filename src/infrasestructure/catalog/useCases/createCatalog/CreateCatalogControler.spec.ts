import request from 'supertest'

// import api from '../../../utils/api-provider'

import app from '../../../../app/app'

describe('Create Catalog', () => {


  it('should be able to create a new catalog', async () => {  

    const response = await request(app).post('/catalog?page=1').send();

    expect(response.status).toBe(201);

  })
})