import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import axios, { AxiosResponse } from 'axios';
const fs = require('fs')

@Injectable()
export class ProductsService {

  async getProductsData(productsDataSetConst): Promise<AxiosResponse | void> {

    const body = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db_name: productsDataSetConst.db_name,
        user: productsDataSetConst.user,
        password: productsDataSetConst.password,
        LanguageCode: productsDataSetConst.LanguageCode
      }
    }

    const apiUrl = 'https://api.stanleystella.com/webrequest/products/get_json'

    const apiResponse = await axios.post(apiUrl, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.data).then(data => (data))
      .catch(error => console.log({ error }));

    const jsonResponse = JSON.stringify(apiResponse, null, 2);

    fs.writeFile('src/data/response.json', jsonResponse, (error) => {
      if (error) throw new Error(error)
    });
  }

  async getProductsStock(productsDataSetConst): Promise<AxiosResponse | null> {
    const body = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db_name: productsDataSetConst.db_name,
        user: productsDataSetConst.user,
        password: productsDataSetConst.password,
        LanguageCode: productsDataSetConst.LanguageCode
      }
    }

    const apiUrl = 'https://api.stanleystella.com/webrequest/v2/stock/get_json'

    const apiResponse = await axios.post(apiUrl, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.data).then(data => (data))
      .catch(error => console.log({ error }));

    const jsonResponse = JSON.stringify(apiResponse, null, 2);

    return apiResponse;
   
    }
  

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

}


