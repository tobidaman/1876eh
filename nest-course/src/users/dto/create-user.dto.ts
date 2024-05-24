import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    @IsString({message: "Должно быть строкой"})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;
    @ApiProperty({example: '123456', description: 'Пароль'})
    @IsString({message: "Должно быть строкой"})
    @Length(6, 16, {message: 'Не меньше 6 и не больше 16'})
    readonly password: string;
}