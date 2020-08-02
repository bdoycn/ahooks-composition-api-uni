export type NoCallRecord<K extends keyof any = any, T = any>
  = Record<K, T> & { call?: string | number | boolean | null | undefined }

export type valueOf<T> = T[keyof T]
