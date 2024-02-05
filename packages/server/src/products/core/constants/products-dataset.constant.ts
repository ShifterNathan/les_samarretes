import { ProductsDatasetInterface } from '../interfaces/products-dataset.interface';

export const ProductsDataSetConst: () => ProductsDatasetInterface = () => {  
  return {
    db_name: process.env.API_DATABASE,
    user: process.env.API_USER,
    password: process.env.API_PASSWORD,
    LanguageCode: process.env.API_LANGUAGE_CODE,
  } as const;
};