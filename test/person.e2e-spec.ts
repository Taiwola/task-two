import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PersonModule } from '../src/modules/person/person.module';
import { getModelToken } from '@nestjs/mongoose';
import { Person } from '../src/modules/person/entities/person.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const mockUser = [{ id: '1234567897654', name: 'seun' }];

  const mockService = {
    findAll: jest.fn().mockResolvedValue(mockUser),
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: '122345667', ...user }),
      ),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PersonModule],
    })
      .overrideProvider(getModelToken(Person.name))
      .useValue(mockService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/person (GET)', async () => {
    return request(app.getHttpServer())
      .get('/api/person')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(mockUser);
  });

  it('/api/person (POST)', async () => {
    return request(app.getHttpServer())
      .post('/api/person')
      .send({ name: 'tunde' })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({
          id: expect.any(String),
          name: 'tunde',
        });
      });
  });

  it('/api/person/:name (PATCH)', async () => {
    const updateDto = { name: 'updatedName' };
    const id = '123456789';
    const name = 'tunde';

    return request(app.getHttpServer())
      .patch(`/api/person/${name}`)
      .send(updateDto)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          id,
          ...updateDto,
        });
      });
  });
});
