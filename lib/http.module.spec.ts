import { INestApplication, Controller, Get } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { HttpModule } from './http.module'
import { HttpService } from './http.service'
import { Server } from 'http'

@Controller('test')
class TestController {
  @Get()
  testGet() {
    return {
      ok: true,
    }
  }
}

describe('E2E tests', () => {
  let app: INestApplication
  let httpService: HttpService
  let server: Server

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TestController],
    }).compile()

    app = moduleRef.createNestApplication()
    httpService = moduleRef.get<HttpService>(HttpService)
    await app.init()
    server = await app.listen(3000)
  })

  it('Can send a successful request to the test controller', async () => {
    const res = await httpService.get('http://localhost:3000/test')
    expect(res.status).toEqual(200)
  })

  afterEach(async () => {
    await app.close()
    server.close()
  })
})
