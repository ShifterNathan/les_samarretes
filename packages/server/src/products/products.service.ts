import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import axios, { AxiosResponse } from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';
const fs = require('fs')

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async getProductsData(productsDataSetConst): Promise<AxiosResponse | void> {

    const body = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db_name: process.env.API_DATABASE,
        user: process.env.API_USER,
        password: process.env.API_PASSWORD,
        LanguageCode: process.env.API_LANGUAGE_CODE,
      }
    }

    const apiUrl = 'https://api.stanleystella.com/webrequest/products/get_json'

    const apiResponse = await axios.post(apiUrl, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.data).then(data => (data))
      .catch(error => console.log({ error }, 'error in the catch'));

    
    const jsonResponse = JSON.stringify(apiResponse, null, 2);

    fs.writeFile('src/data/response.json', jsonResponse, (error) => {
      if (error) throw new Error(error)
    });
    
  }

async saveProductsData(productsDataSetConst) {
    const body = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db_name: process.env.API_DATABASE,
        user: process.env.API_USER,
        password: process.env.API_PASSWORD,
        LanguageCode: process.env.API_LANGUAGE_CODE,
      },
    };

    const apiUrl = 'https://api.stanleystella.com/webrequest/products/get_json';

    try {
      const apiResponse = await axios.post(apiUrl, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (typeof apiResponse.data.result === 'string') {
        const arrayOfProducts = JSON.parse(apiResponse.data.result);

        console.log(arrayOfProducts[0]);
        

        await Promise.all(arrayOfProducts.map(product => {
          
          const newProduct = new this.productModel({
            languageCode: product.LanguageCode,
            B2BSKUREF: product.B2BSKUREF,
            styleCode: product.StyleCode,
            colorCode: product.ColorCode,
            sizeCodeNavision: product.SizeCodeNavision,
            sizeCode: product.SizeCode,
            styleName: product.StyleName,
            color: product.Color,
            colorGroup: product.ColorGroup,
            type: product.Type,
            category: product.Category,
            gender: product.Gender,
            stock: product.Stock,
            fit: product.Fit,
            neckline: product.Neckline,
            sleeve: product.Sleeve,
            shortDescription: product.ShortDescription,
            longDescription: product.LongDescription,
            shortNote: product.ShortNote,
            longNote: product.LongNote,
            bleaching: product.Bleaching,
            washing: product.Washing,
            cleaning: product.Cleaning,
            drying: product.Drying,
            ironing: product.Ironing,
            compositionList: product.CompositionList,
            constructionList: product.ConstructionList,
            finishList: product.FinishList,
            sundryList: product.SundryList,
            gauge: product.Gauge,
            weight: product.Weight,
            GOTS: product.GOTS,
            OCS100: product.OCS100,
            OCSBlended: product.OCSBlended,
            OEKOTexRecycled: product.OEKOTexRecycled,
            CarbonNeutral: product.CarbonNeutral,
            FSC: product.FSC,
            REACH: product.REACH,
            weightPerUnit: product.WeightPerUnit,
            piecesPerBox: product.PiecesPerBox,
            halfChest: product.HalfChest,
            bodyLength: product.BodyLength,
            sleeveLength: product.SleeveLength,
            width: product.Width,
            length: product.Length,
            strapLength: product.StrapLength,
            waist: product.Waist,
            tight: product.Tight,
            totalLegLength: product.TotalLegLength,
            HSCode: product.HSCode,
            K30EUR: product.K30EUR,
            K15EUR: product.K15EUR,
            K3EUR: product.K3EUR,
            K50EUR: product.K50EUR,
            K100EUR: product.K100EUR,
            priceLessThan10EUR: product['Price<10 EUR'],
            priceMoreThan10EUR: product['Price>10 EUR'],
            priceMoreThan50EUR: product['Price>50 EUR'],
            priceMoreThan100EUR: product['Price>100 EUR'],
            priceMoreThan250EUR: product['Price>250 EUR'],
            priceMoreThan500EUR: product['Price>500 EUR'],
            priceMoreThan1000EUR: product['Price>1000 EUR'],
            smallBrandEUR: product['Small Brand EUR'],
            mediumBrandEUR: product['Medium Brand EUR'],
            K3GBP: product.K3GBP,
            K15GBP: product.K15GBP,
            K30GBP: product.K30GBP,
            K50GBP: product.K50GBP,
            K100GBP: product.K100GBP,
            priceLessThan10GBP: product['Price<10 GBP'],
            priceMoreThan10GBP: product['Price>10 GBP'],
            priceMoreThan50GBP: product['Price>50 GBP'],
            priceMoreThan100GBP: product['Price>100 GBP'],
            priceMoreThan250GBP: product['Price>250 GBP'],
            priceMoreThan500GBP: product['Price>500 GBP'],
            priceMoreThan1000GBP: product['Price>1000 GBP'],
            smallBrandGBP: product['Small Brand GBP'],
            mediumBrandGBP: product['Medium Brand GBP'],
            SKUStartDate: product.SKUStartDate,
            published: product.Published,
            piecesPerPolybag: product.PiecesPerPolybag,
            fitID: product.FitID,
            genderID: product.GenderID,
            categoryID: product.CategoryID,
            typeID: product.TypeID,
            necklineID: product.NecklineID,
            sleeveID: product.SleeveID,
            sequenceStyle: product.SequenceStyle,
            newStyle: product.NewStyle,
            newProduct: product.NewProduct,
            newItem: product.NewItem,
            newColor: product.NewColor,
            newSize: product.NewSize,
            colorSequence: product.ColorSequence,
            colorGroupSequence: product.ColorGroupSequence,
            sizeSequence: product.SizeSequence,
            stylePublished: product.StylePublished,
            mainPicture: product.MainPicture,
            styleSegment: product.StyleSegment,
            productLifecycle: product.ProductLifecycle,
            countryOfOrigin: product.CountryOfOrigin,
            categoryCode: product.CategoryCode,
            typeCode: product.TypeCode,
            grs100Poly: product.GRS100Poly,
            GOTS85: product.GOTS85,
            thickness: product.Thickness,
            shellWeight: product.ShellWeight,
            paddingComposition: product.PaddingComposition,
            paddingConstruction: product.PaddingConstruction,
            paddingFinishing: product.PaddingFinishing,
            paddingWeight: product.PaddingWeight,
            liningComposition: product.LiningComposition,
            liningConstruction: product.LiningConstruction,
            liningFinishing: product.LiningFinishing,
            liningWeight: product.LiningWeight,
            layer4Name: product.Layer4Name,
            layer4Composition: product.Layer4Composition,
            layer4Construction: product.Layer4Construction,
            layer4Finishing: product.Layer4Finishing,
            layer4Weight: product.Layer4Weight,
            layer5Name: product.Layer5Name,
            layer5Composition: product.Layer5Composition,
            layer5Construction: product.Layer5Construction,
            layer5Finishing: product.Layer5Finishing,
            layer5Weight: product.Layer5Weight,
            styleNotice: product.StyleNotice,
            washInstructions: product.WashInstructions,
            washInstructionsAdditions: product.WashInstructionsAdditions,
            specifications: product.Specifications,
            VEGAN: product.VEGAN,
            Ecotex: product.Ecotex,
            Fairwear: product.Fairwear,
          });
          return newProduct.save();
        }));
      } else {
        console.error('Invalid response format:', apiResponse.data.result);
      }
    } catch (error) {
      console.error('Error in API call or processing data:', error);
    }
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
