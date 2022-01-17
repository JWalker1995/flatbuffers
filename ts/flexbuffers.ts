/* eslint-disable @typescript-eslint/no-namespace */
import { Builder } from './flexbuffers/builder.ts';
import { toReference } from './flexbuffers/reference.ts';
export { toReference } from './flexbuffers/reference.ts';

export function builder(): Builder {
    return new Builder();
}

export function toObject(buffer: ArrayBuffer): unknown {
    return toReference(buffer).toObject();
}

export function encode(object: unknown, size = 2048, deduplicateStrings = true, deduplicateKeys = true, deduplicateKeyVectors = true): Uint8Array {
    const builder = new Builder(size > 0 ? size : 2048, deduplicateStrings, deduplicateKeys, deduplicateKeyVectors);
    builder.add(object);
    return builder.finish();
}
