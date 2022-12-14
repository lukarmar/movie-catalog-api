import request from 'supertest'

import app from '../../../../app/app'


describe('List All Catalogs', () => {

  it('should be able to list all catalogs', async () => {


    await request(app).post('/vehicle?page=1').send()
    
    const response = await request(app).get('/catalog').send();

    expect(response.status).toBe(201);

  })
})