import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseObjectIdPipe implements PipeTransform<string> {
    transform(value: string, metadata: ArgumentMetadata): string;
}
