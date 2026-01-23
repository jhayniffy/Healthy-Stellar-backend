import { Column, ColumnOptions } from 'typeorm';
import { EncryptionTransformer } from '../transformers/encryption.transformer';

export function Encrypted(options?: ColumnOptions): PropertyDecorator {
  return Column({
    type: 'text',
    transformer: new EncryptionTransformer(),
    ...options,
  });
}

export function EncryptedColumn(options?: ColumnOptions): PropertyDecorator {
  return Encrypted(options);
}
