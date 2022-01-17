import { ByteBuffer } from './byte-buffer.ts';
import { Builder } from './builder.ts';

export type Offset = number;

export type Table = {
  bb: ByteBuffer
  bb_pos: number
};

export interface IGeneratedObject {
  pack(builder:Builder): Offset
  unpack(): IGeneratedObject
}