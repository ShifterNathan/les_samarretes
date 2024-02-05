import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Product extends Document {
  @ApiProperty({
    example: 'fr_FR',
    description: 'Language code of the product',
  })
  @Prop({ type: String, required: false })
  languageCode: string;

  @ApiProperty({ example: 'STTU755C5042S', description: 'B2B SKU reference' })
  @Prop({ type: String, required: false })
  B2BSKUREF: string;

  @ApiProperty({ example: 'STTU755', description: 'Style code of the product' })
  @Prop({ type: String, required: false, unique: true })
  styleCode: string;

  @ApiProperty({ example: 'C504', description: 'Color code of the product' })
  @Prop({ type: String, required: false })
  colorCode: string;

  @ApiProperty({ example: '2S', description: 'Size code as per Navision' })
  @Prop({ type: String, required: false })
  sizeCodeNavision: string;

  @ApiProperty({ example: 'XXS', description: 'Size code of the product' })
  @Prop({ type: String, required: false })
  sizeCode: string;

  @ApiProperty({ example: 'Creator', description: 'Style name of the product' })
  @Prop({ type: String, required: false })
  styleName: string;

  @ApiProperty({
    example: 'Vintage White',
    description: 'Color of the product',
  })
  @Prop({ type: String, required: false })
  color: string;

  @ApiProperty({ example: 'Whites', description: 'Color group of the product' })
  @Prop({ type: String, required: false })
  colorGroup: string;

  @ApiProperty({ example: 'T-shirt', description: 'Type of the product' })
  @Prop({ type: String, required: false })
  type: string;

  @ApiProperty({ example: 'Tees', description: 'Category of the product' })
  @Prop({ type: String, required: false })
  category: string;

  @ApiProperty({ example: 'Unisex', description: 'Gender of the product' })
  @Prop({ type: String, required: false })
  gender: string;

  @ApiProperty({ example: '719', description: 'Stock of the product' })
  @Prop({ type: Number, required: false })
  stock: number;

  @ApiProperty({ example: '', description: 'Fit of the product' })
  @Prop({ type: String, required: false })
  fit: string;

  @ApiProperty({ example: '', description: 'Neckline of the product' })
  @Prop({ type: String, required: false })
  neckline: string;

  @ApiProperty({
    example: 'Short sleeves',
    description: 'Sleeve type of the product',
  })
  @Prop({ type: String, required: false })
  sleeve: string;

  @ApiProperty({ example: '', description: 'Short description of the product' })
  @Prop({ type: String, required: false })
  shortDescription: string;

  @ApiProperty({ example: '', description: 'Long description of the product' })
  @Prop({ type: String, required: false })
  longDescription: string;

  @ApiProperty({ example: '', description: '' })
  @Prop({ type: String, required: false })
  shortNote: string;

  @ApiProperty({ example: '', description: '' })
  @Prop({ type: String, required: false })
  longNote: string;

  @ApiProperty({ example: 'Non', description: 'Bleaching instructions' })
  @Prop({ type: String, required: false })
  bleaching: string;

  @ApiProperty({ example: '30°', description: 'Washing temperature' })
  @Prop({ type: String, required: false })
  washing: string;

  @ApiProperty({ example: 'Non', description: 'Dry cleaning instructions' })
  @Prop({ type: String, required: false })
  cleaning: string;

  @ApiProperty({
    example: 'Pas de séchoir',
    description: 'Drying instructions',
  })
  @Prop({ type: String, required: false })
  drying: string;

  @ApiProperty({ example: '110°', description: 'Ironing temperature' })
  @Prop({ type: String, required: false })
  ironing: string;

  @ApiProperty({ example: '', description: 'Composition list' })
  @Prop({ type: String, required: false })
  compositionList: string;

  @ApiProperty({ example: '', description: 'Construction list' })
  @Prop({ type: String, required: false })
  constructionList: string;

  @ApiProperty({ example: '', description: 'Finish list' })
  @Prop({ type: String, required: false })
  finishList: string;

  @ApiProperty({ example: '', description: 'Sundry list', required: false })
  @Prop({ type: String, required: false })
  sundryList: string;

  @ApiProperty({ example: '0.0', description: 'Gauge of the product' })
  @Prop({ type: Number, required: false })
  gauge: number;

  @ApiProperty({ example: '180.0', description: 'Weight of the product' })
  @Prop({ type: Number, required: false })
  weight: number;

  @ApiProperty({ example: "1", description: "GOTS certification status" })
  @Prop({ type: Number, required: false })
  GOTS: number;

  @ApiProperty({ example: "0", description: "OCS100 certification status" })
  @Prop({ type: Number, required: false })
  OCS100: number;

  @ApiProperty({ example: "0", description: "OCS Blended certification status" })
  @Prop({ type: Number, required: false })
  OCSBlended: number;

  @ApiProperty({ example: "0", description: "" })
  @Prop({ type: Number, required: false })
  OEKOTexRecycled: number;

  @ApiProperty({ example: "1", description: "Ecotex certification status" })
  @Prop({ type: Number, required: false })
  Ecotex: number;

  @ApiProperty({ example: "1", description: "Fairwear certification status" })
  @Prop({ type: Number, required: false })
  Fairwear: number;

  @ApiProperty({ example: "0", description: "CarbonNeutral certification status" })
  @Prop({ type: Number, required: false })
  CarbonNeutral: number;

  @ApiProperty({ example: "0", description: "FSC certification status" })
  @Prop({ type: Number, required: false })
  FSC: number;

  @ApiProperty({ example: "0", description: "REACH compliance status" })
  @Prop({ type: Number, required: false })
  REACH: number;

  @ApiProperty({ example: "0.12", description: "Weight per unit" })
  @Prop({ type: Number, required: false })
  weightPerUnit: number;

  @ApiProperty({ example: "100", description: "Pieces per box" })
  @Prop({ type: Number, required: false })
  piecesPerBox: number;

  @ApiProperty({ example: "43.5", description: "Half chest measurement" })
  @Prop({ type: Number, required: false })
  halfChest: number;

  @ApiProperty({ example: "64.0", description: "Body length measurement" })
  @Prop({ type: Number, required: false })
  bodyLength: number;

  @ApiProperty({ example: "19.0", description: "Sleeve length measurement" })
  @Prop({ type: Number, required: false })
  sleeveLength: number;

  @ApiProperty({ example: 0.0, description: 'Width of the product' })
  @Prop({ type: Number, required: false })
  width: number;

  @ApiProperty({ example: 0.0, description: 'Length of the product' })
  @Prop({ type: Number, required: false })
  length: number;

  @ApiProperty({ example: 0.0, description: 'Strap length of the product' })
  @Prop({ type: Number, required: false })
  strapLength: number;

  @ApiProperty({ example: 0.0, description: 'Waist measurement of the product' })
  @Prop({ type: Number, required: false })
  waist: number;

  @ApiProperty({ example: 0.0, description: 'Tight measurement of the product' })
  @Prop({ type: Number, required: false })
  tight: number;

  @ApiProperty({ example: 0.0, description: 'Total leg length of the product' })
  @Prop({ type: Number, required: false })
  totalLegLength: number;

  @ApiProperty({ example: "61091000", description: 'HS code of the product' })
  @Prop({ type: String, required: false })
  HSCode: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K3EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K15EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K30EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K50EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K100EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceLessThan10EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan10EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan50EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan100EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan250EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan500EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan1000EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  smallBrandEUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  mediumBrandEUR: number;

  
  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K3GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K15GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K30GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K50GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: false })
  K100GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceLessThan10GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan10GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan50GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan100GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan250GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan500GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  priceMoreThan1000GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  smallBrandGBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: false })
  mediumBrandGBP: number;

  @ApiProperty({ example: "2019-01-01", description: "SKU Start Date" })
  @Prop({ type: Date, required: false })
  SKUStartDate: Date;

  @ApiProperty({ example: 1, description: "Published" })
  @Prop({ type: Boolean, required: false })
  published: boolean;

  @ApiProperty({ example: 5, description: "Pieces Per Polybag" })
  @Prop({ type: Number, required: false })
  piecesPerPolybag: number;

  @ApiProperty({ example: 9, description: "Fit ID" })
  @Prop({ type: String, required: false })
  fitID: string;

  @ApiProperty({ example: 13, description: "Gender ID" })
  @Prop({ type: String, required: false })
  genderID: string;

  @ApiProperty({ example: 18, description: "Category ID" })
  @Prop({ type: String, required: false })
  categoryID: string;

  @ApiProperty({ example: 30, description: "Type ID" })
  @Prop({ type: String, required: false })
  typeID: string;

  @ApiProperty({ example: 11, description: "Neckline ID" })
  @Prop({ type: String, required: false })
  necklineID: string;

  @ApiProperty({ example: 10, description: "Sleeve ID" })
  @Prop({ type: String, required: false })
  sleeveID: string;

  @ApiProperty({ example: 6300, description: "Sequence Style" })
  @Prop({ type: Number, required: false })
  sequenceStyle: number;

  @ApiProperty({ example: false, description: "New Style" })
  @Prop({ type: Boolean, required: false })
  newStyle: boolean;

  @ApiProperty({ example: false, description: "New Product" })
  @Prop({ type: Boolean, required: false })
  newProduct: boolean;

  @ApiProperty({ example: false, description: "New Item" })
  @Prop({ type: Boolean, required: false })
  newItem: boolean;

  @ApiProperty({ example: false, description: "New Color" })
  @Prop({ type: Boolean, required: false })
  newColor: boolean;

  @ApiProperty({ example: false, description: "New Size" })
  @Prop({ type: Boolean, required: false })
  newSize: boolean;

  @ApiProperty({ example: 2, description: "Color Sequence" })
  @Prop({ type: Number, required: false })
  colorSequence: number;

  @ApiProperty({ example: 0, description: "Color Group Sequence" })
  @Prop({ type: Number, required: false })
  colorGroupSequence: number;

  @ApiProperty({ example: 10, description: "Size Sequence" })
  @Prop({ type: Number, required: false })
  sizeSequence: number;

  @ApiProperty({ example: true, description: "Style Published" })
  @Prop({ type: Boolean, required: false })
  stylePublished: boolean;

  @ApiProperty({ example: "https://res.cloudinary.com/www-stanleystella-com/t_pim/TechnicalNames/SFM0_STTU755_C037.jpg", description: "Main Picture" })
  @Prop({ type: String, required: false })
  mainPicture: string;

  @ApiProperty({ example: "ICONIC", description: "Style Segment" })
  @Prop({ type: String, required: false })
  styleSegment: string;

  @ApiProperty({ example: "Permanent", description: "Product Lifecycle" })
  @Prop({ type: String, required: false })
  productLifecycle: string;

  @ApiProperty({ example: "BD", description: "Country Of Origin" })
  @Prop({ type: String, required: false })
  countryOfOrigin: string;

  @ApiProperty({ example: "TEES", description: "Category Code" })
  @Prop({ type: String, required: false })
  categoryCode: string;

  @ApiProperty({ example: "T-SHIRT", description: "Type Code" })
  @Prop({ type: String, required: false })
  typeCode: string;

  @ApiProperty({ example: "T-SHIRT", description: "Type Code" })
  @Prop({ type: Number, required: false })
  grs100Poly: number;

  @ApiProperty({ example: 0, description: "GRS" })
  @Prop({ type: Number, required: false })
  GRS: number;

  @ApiProperty({ example: true, description: "VEGAN" })
  @Prop({ type: Boolean, required: false })
  VEGAN: boolean;

  @ApiProperty({ example: 0, description: "GOTS85" })
  @Prop({ type: Number, required: false })
  GOTS85: number;

  @ApiProperty({ example: false, description: "Thickness" })
  @Prop({ type: Boolean, required: false })
  thickness: boolean;

  @ApiProperty({ example: 0.0, description: 'Shell weight of the product in grams' })
  @Prop({ type: Number, required: false })
  shellWeight: number;

  @ApiProperty({ example: "", description: 'Padding composition of the product' })
  @Prop({ type: String, required: false }) // Assuming it might be optional
  paddingComposition: string;

  @ApiProperty({ example: "", description: 'Construction details of the padding' })
  @Prop({ type: String, required: false })
  paddingConstruction: string;

  @ApiProperty({ example: "", description: 'Finishing details of the padding' })
  @Prop({ type: String, required: false })
  paddingFinishing: string;

  @ApiProperty({ example: 0.0, description: 'Weight of the padding in grams' })
  @Prop({ type: Number, required: false })
  paddingWeight: number;

  @ApiProperty({ example: "", description: 'Lining composition of the product' })
  @Prop({ type: String, required: false })
  liningComposition: string;

  @ApiProperty({ example: "", description: 'Construction details of the lining' })
  @Prop({ type: String, required: false })
  liningConstruction: string;

  @ApiProperty({ example: "", description: 'Finishing details of the lining' })
  @Prop({ type: String, required: false })
  liningFinishing: string;

  @ApiProperty({ example: 0.0, description: 'Weight of the lining in grams' })
  @Prop({ type: Number, required: false })
  liningWeight: number;

  @ApiProperty({ example: "", description: 'Fourth layer name of the product' })
  @Prop({ type: String, required: false })
  layer4Name: string;

  @ApiProperty({ example: "", description: 'Composition of the fourth layer' })
  @Prop({ type: String, required: false })
  layer4Composition: string;

  @ApiProperty({ example: "", description: 'Construction of the fourth layer' })
  @Prop({ type: String, required: false })
  layer4Construction: string;

  @ApiProperty({ example: "", description: 'Finishing of the fourth layer' })
  @Prop({ type: String, required: false })
  layer4Finishing: string;

  @ApiProperty({ example: 0.0, description: 'Weight of the fourth layer in grams' })
  @Prop({ type: Number, required: false })
  layer4Weight: number;

  @ApiProperty({ example: "", description: 'Fifth layer name of the product' })
  @Prop({ type: String, required: false })
  layer5Name: string;

  @ApiProperty({ example: "", description: 'Composition of the fifth layer' })
  @Prop({ type: String, required: false })
  layer5Composition: string;

  @ApiProperty({ example: "", description: 'Construction of the fifth layer' })
  @Prop({ type: String, required: false })
  layer5Construction: string;

  @ApiProperty({ example: "", description: 'Finishing of the fifth layer' })
  @Prop({ type: String, required: false })
  layer5Finishing: string;

  @ApiProperty({ example: 0.0, description: 'Weight of the fifth layer in grams' })
  @Prop({ type: Number, required: false })
  layer5Weight: number;

  @ApiProperty({ example: "", description: 'Style notice of the product' })
  @Prop({ type: String, required: false })
  styleNotice: string;

  @ApiProperty({ example: "", description: 'Washing instructions of the product' })
  @Prop({ type: String, required: false })
  washInstructions: string;

  @ApiProperty({ example: "0", description: 'Additional washing instructions' })
  @Prop({ type: String, required: false })
  washInstructionsAdditions: string;

  @ApiProperty({ example: "", description: 'Product specifications' })
  @Prop({ type: String, required: false })
  specifications: string;
}

export type ProductDocument = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);