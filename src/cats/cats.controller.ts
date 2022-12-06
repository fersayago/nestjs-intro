import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  // podemos usar el decorator @HttpCode(...) para cambiar el status code que por defecto es 200 salvo para los post que es 201
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  // el siguiente decorator le dice a Nest de crear un manejador para un endpoint especifico para un pedido HTTP
  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get('example')
  // aca podemos poner cualquier nombre para bindear este metodo a la ruta
  findExampleCat(): string {
    return 'This action will return the infamous example cat';
  }

  @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This actions returns cat #${params.id}`;
  // }
  findOne(@Param('id') id: string): string {
    return `This actions returns cat #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This actions updates cat #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes cat #${id}`;
  }
}
