import { Inject, Injectable } from '@nestjs/common'
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AXIOS_INSTANCE_TOKEN } from './http.constants'

@Injectable()
export class HttpService {
  constructor(
    @Inject(AXIOS_INSTANCE_TOKEN)
    protected readonly instance: AxiosInstance = Axios,
  ) {}

  request<T = unknown>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.request<T>(config)
  }

  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, config)
  }

  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config)
  }

  head<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.head<T>(url, config)
  }

  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config)
  }

  put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config)
  }

  patch<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data, config)
  }

  get axiosRef(): AxiosInstance {
    return this.instance
  }
}
