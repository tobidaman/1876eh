import { IsString, IsNumber, IsBoolean, IsEnum } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsNumber()
  price: number;

  @IsString()
  category: string;

  @IsString()
  descriptionProduct: string;

  @IsNumber()
  weight: number;

  @IsBoolean()
  wireless: boolean;

  @IsNumber()
  count: number;
}