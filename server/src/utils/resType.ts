import { ResJsonType } from "./schema";

export function resJsonType<T>(
  data: T,
  code: number,
  msg?: string,
  err?: Error
) {
  return {
    data: data ?? null,
    code: code ?? 200,
    msg: msg ?? null,
    result: true,
    error: err ?? null,
  };
}
