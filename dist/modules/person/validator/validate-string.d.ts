import { PipeTransform } from '@nestjs/common';
export declare class NameValidationPipe implements PipeTransform<string, string> {
    transform(value: string): string;
}
