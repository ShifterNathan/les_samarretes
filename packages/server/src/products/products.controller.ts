import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsDataSetConst } from './core/constants/products.constants';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }


  @Get('data')
  getProductsData(productsDataSetConst: typeof ProductsDataSetConst) {
    return this.productsService.getProductsData(productsDataSetConst);
  }

  @Get('stock')
  getProductsStock(productsDataSetConst: typeof ProductsDataSetConst) {
    return this.productsService.getProductsStock(productsDataSetConst);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

}
