import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class NameValidationPipe implements PipeTransform<string, string> {
  transform(value: string): string {
    if (!value || typeof value !== 'string') {
      throw new BadRequestException('Name should be a non-empty string.');
    }
    // You can add more custom validation logic here.
    return value;
  }
}
