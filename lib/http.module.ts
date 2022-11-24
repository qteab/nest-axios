import { Module, DynamicModule } from '@nestjs/common'
import { HttpService } from './http.service'
import { AXIOS_INSTANCE_TOKEN } from './http.constants'
import Axios, { AxiosRequestConfig } from 'axios'

export type HttpModuleOptions = AxiosRequestConfig

@Module({
  providers: [
    HttpService,
    {
      provide: AXIOS_INSTANCE_TOKEN,
      useValue: Axios,
    },
  ],
  exports: [HttpService],
})
export class HttpModule {
  static register(config: HttpModuleOptions): DynamicModule {
    return {
      module: HttpModule,
      providers: [
        HttpService,
        {
          provide: AXIOS_INSTANCE_TOKEN,
          useValue: Axios.create(config),
        },
      ],
      exports: [HttpService],
    }
  }
}
