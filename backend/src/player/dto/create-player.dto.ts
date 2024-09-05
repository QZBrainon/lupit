import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
export class CreatePlayerDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @Type(() => Number)
  age: number;
  @IsNotEmpty()
  @Type(() => Number)
  teamId: number;
}
