import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Product extends Document {
  @ApiProperty({
    example: 'fr_FR',
    description: 'Language code of the product',
  })
  @Prop({ type: String, required: true })
  languageCode: string;

  @ApiProperty({ example: 'STTU755C5042S', description: 'B2B SKU reference' })
  @Prop({ type: String, required: true, unique: true })
  B2BSKUREF: string;

  @ApiProperty({ example: 'STTU755', description: 'Style code of the product' })
  @Prop({ type: String, required: true, unique: true })
  styleCode: string;

  @ApiProperty({ example: 'C504', description: 'Color code of the product' })
  @Prop({ type: String, required: true })
  colorCode: string;

  @ApiProperty({ example: '2S', description: 'Size code as per Navision' })
  @Prop({ type: String, required: true })
  sizeCodeNavision: string;

  @ApiProperty({ example: 'XXS', description: 'Size code of the product' })
  @Prop({ type: String, required: true })
  sizeCode: string;

  @ApiProperty({ example: 'Creator', description: 'Style name of the product' })
  @Prop({ type: String, required: true })
  styleName: string;

  @ApiProperty({
    example: 'Vintage White',
    description: 'Color of the product',
  })
  @Prop({ type: String, required: true })
  color: string;

  @ApiProperty({ example: 'Whites', description: 'Color group of the product' })
  @Prop({ type: String, required: true })
  colorGroup: string;

  @ApiProperty({ example: 'T-shirt', description: 'Type of the product' })
  @Prop({ type: String, required: true })
  type: string;

  @ApiProperty({ example: 'Tees', description: 'Category of the product' })
  @Prop({ type: String, required: true })
  category: string;

  @ApiProperty({ example: 'Unisex', description: 'Gender of the product' })
  @Prop({ type: String, required: true })
  gender: string;

  @ApiProperty({ example: '719', description: 'Stock of the product' })
  @Prop({ type: Number, required: true })
  stock: number;

  @ApiProperty({ example: '', description: 'Fit of the product' })
  @Prop({ type: String, required: true })
  fit: string;

  @ApiProperty({ example: '', description: 'Neckline of the product' })
  @Prop({ type: String, required: true })
  neckline: string;

  @ApiProperty({
    example: 'Short sleeves',
    description: 'Sleeve type of the product',
  })
  @Prop({ type: String, required: true })
  sleeve: string;

  @ApiProperty({ example: '', description: 'Short description of the product' })
  @Prop({ type: String, required: true })
  shortDescription: string;

  @ApiProperty({ example: '', description: 'Long description of the product' })
  @Prop({ type: String, required: true })
  longDescription: string;

  @ApiProperty({ example: 'Non', description: 'Bleaching instructions' })
  @Prop({ type: String, required: true })
  bleaching: string;

  @ApiProperty({ example: '30°', description: 'Washing temperature' })
  @Prop({ type: String, required: true })
  washing: string;

  @ApiProperty({ example: 'Non', description: 'Dry cleaning instructions' })
  @Prop({ type: String, required: true })
  cleaning: string;

  @ApiProperty({
    example: 'Pas de séchoir',
    description: 'Drying instructions',
  })
  @Prop({ type: String, required: true })
  drying: string;

  @ApiProperty({ example: '110°', description: 'Ironing temperature' })
  @Prop({ type: String, required: true })
  ironing: string;

  @ApiProperty({ example: '', description: 'Composition list' })
  @Prop({ type: String, required: true })
  compositionList: string;

  @ApiProperty({ example: '', description: 'Construction list' })
  @Prop({ type: String, required: true })
  constructionList: string;

  @ApiProperty({ example: '', description: 'Finish list' })
  @Prop({ type: String, required: true })
  finishList: string;

  @ApiProperty({ example: '', description: 'Sundry list', required: false })
  @Prop({ type: String, required: false })
  sundryList: string;

  @ApiProperty({ example: '0.0', description: 'Gauge of the product' })
  @Prop({ type: Number, required: true })
  gauge: number;

  @ApiProperty({ example: '180.0', description: 'Weight of the product' })
  @Prop({ type: Number, required: true })
  weight: number;

  @ApiProperty({ example: "1", description: "GOTS certification status" })
  @Prop({ type: Number, required: true })
  GOTS: number;

  @ApiProperty({ example: "0", description: "OCS100 certification status" })
  @Prop({ type: Number, required: true })
  OCS100: number;

  @ApiProperty({ example: "0", description: "OCS Blended certification status" })
  @Prop({ type: Number, required: true })
  OCSBlended: number;

  @ApiProperty({ example: "1", description: "Ecotex certification status" })
  @Prop({ type: Number, required: true })
  Ecotex: number;

  @ApiProperty({ example: "1", description: "Fairwear certification status" })
  @Prop({ type: Number, required: true })
  Fairwear: number;

  @ApiProperty({ example: "0", description: "CarbonNeutral certification status" })
  @Prop({ type: Number, required: true })
  CarbonNeutral: number;

  @ApiProperty({ example: "0", description: "FSC certification status" })
  @Prop({ type: Number, required: true })
  FSC: number;

  @ApiProperty({ example: "0", description: "REACH compliance status" })
  @Prop({ type: Number, required: true })
  REACH: number;

  @ApiProperty({ example: "0.12", description: "Weight per unit" })
  @Prop({ type: Number, required: true })
  weightPerUnit: number;

  @ApiProperty({ example: "100", description: "Pieces per box" })
  @Prop({ type: Number, required: true })
  piecesPerBox: number;

  @ApiProperty({ example: "43.5", description: "Half chest measurement" })
  @Prop({ type: Number, required: true })
  halfChest: number;

  @ApiProperty({ example: "64.0", description: "Body length measurement" })
  @Prop({ type: Number, required: true })
  bodyLength: number;

  @ApiProperty({ example: "19.0", description: "Sleeve length measurement" })
  @Prop({ type: Number, required: true })
  sleeveLength: number;

  @ApiProperty({ example: 0.0, description: 'Width of the product' })
  @Prop({ type: Number, required: true })
  width: number;

  @ApiProperty({ example: 0.0, description: 'Length of the product' })
  @Prop({ type: Number, required: true })
  length: number;

  @ApiProperty({ example: 0.0, description: 'Strap length of the product' })
  @Prop({ type: Number, required: true })
  strapLength: number;

  @ApiProperty({ example: 0.0, description: 'Waist measurement of the product' })
  @Prop({ type: Number, required: true })
  waist: number;

  @ApiProperty({ example: 0.0, description: 'Tight measurement of the product' })
  @Prop({ type: Number, required: true })
  tight: number;

  @ApiProperty({ example: 0.0, description: 'Total leg length of the product' })
  @Prop({ type: Number, required: true })
  totalLegLength: number;

  @ApiProperty({ example: "61091000", description: 'HS code of the product' })
  @Prop({ type: String, required: true })
  HSCode: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K3EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K15EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K30EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K50EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K100EUR: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan10EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan50EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan100EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan250EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan500EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan1000EUR: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K3GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K15GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K30GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K50GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: String, required: true })
  K100GBP: string;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan10GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan50GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan100GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan250GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan500GBP: number;

  @ApiProperty({ example: "", description: '' })
  @Prop({ type: Number, required: true })
  priceMoreThan1000GBP: number;

  @ApiProperty({ example: "2019-01-01", description: "SKU Start Date" })
  @Prop({ type: Date, required: true })
  SKUStartDate: Date;

  @ApiProperty({ example: 1, description: "Published" })
  @Prop({ type: Boolean, required: true })
  published: boolean;

  @ApiProperty({ example: 5, description: "Pieces Per Polybag" })
  @Prop({ type: Number, required: true })
  piecesPerPolybag: number;

  @ApiProperty({ example: 9, description: "Fit ID" })
  @Prop({ type: Number, required: true })
  fitID: number;

  @ApiProperty({ example: 13, description: "Gender ID" })
  @Prop({ type: Number, required: true })
  genderID: number;

  @ApiProperty({ example: 18, description: "Category ID" })
  @Prop({ type: Number, required: true })
  categoryID: number;

  @ApiProperty({ example: 30, description: "Type ID" })
  @Prop({ type: Number, required: true })
  typeID: number;

  @ApiProperty({ example: 11, description: "Neckline ID" })
  @Prop({ type: Number, required: true })
  necklineID: number;

  @ApiProperty({ example: 10, description: "Sleeve ID" })
  @Prop({ type: Number, required: true })
  sleeveID: number;

  @ApiProperty({ example: 6300, description: "Sequence Style" })
  @Prop({ type: Number, required: true })
  sequenceStyle: number;

  @ApiProperty({ example: false, description: "New Style" })
  @Prop({ type: Boolean, required: true })
  newStyle: boolean;

  @ApiProperty({ example: false, description: "New Product" })
  @Prop({ type: Boolean, required: true })
  newProduct: boolean;

  @ApiProperty({ example: false, description: "New Item" })
  @Prop({ type: Boolean, required: true })
  newItem: boolean;

  @ApiProperty({ example: false, description: "New Color" })
  @Prop({ type: Boolean, required: true })
  newColor: boolean;

  @ApiProperty({ example: false, description: "New Size" })
  @Prop({ type: Boolean, required: true })
  newSize: boolean;

  @ApiProperty({ example: 2, description: "Color Sequence" })
  @Prop({ type: Number, required: true })
  colorSequence: number;

  @ApiProperty({ example: 0, description: "Color Group Sequence" })
  @Prop({ type: Number, required: true })
  colorGroupSequence: number;

  @ApiProperty({ example: 10, description: "Size Sequence" })
  @Prop({ type: Number, required: true })
  sizeSequence: number;

  @ApiProperty({ example: true, description: "Style Published" })
  @Prop({ type: Boolean, required: true })
  stylePublished: boolean;

  @ApiProperty({ example: "https://res.cloudinary.com/www-stanleystella-com/t_pim/TechnicalNames/SFM0_STTU755_C037.jpg", description: "Main Picture" })
  @Prop({ type: String, required: true })
  mainPicture: string;

  @ApiProperty({ example: "ICONIC", description: "Style Segment" })
  @Prop({ type: String, required: true })
  styleSegment: string;

  @ApiProperty({ example: "Permanent", description: "Product Lifecycle" })
  @Prop({ type: String, required: true })
  productLifecycle: string;

  @ApiProperty({ example: "BD", description: "Country Of Origin" })
  @Prop({ type: String, required: true })
  countryOfOrigin: string;

  @ApiProperty({ example: "TEES", description: "Category Code" })
  @Prop({ type: String, required: true })
  categoryCode: string;

  @ApiProperty({ example: "T-SHIRT", description: "Type Code" })
  @Prop({ type: String, required: true })
  typeCode: string;

  @ApiProperty({ example: 0, description: "GRS" })
  @Prop({ type: Number, required: true })
  GRS: number;

  @ApiProperty({ example: true, description: "VEGAN" })
  @Prop({ type: Boolean, required: true })
  VEGAN: boolean;

  @ApiProperty({ example: 0, description: "GOTS85" })
  @Prop({ type: Number, required: true })
  GOTS85: number;

  @ApiProperty({ example: false, description: "Thickness" })
  @Prop({ type: Boolean, required: true })
  thickness: boolean;

  @ApiProperty({ example: 0.0, description: 'Shell weight of the product in grams' })
  @Prop({ type: Number, required: true })
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
  @Prop({ type: Number, required: true })
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
  @Prop({ type: Number, required: true })
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
  @Prop({ type: Number, required: true })
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
  @Prop({ type: Number, required: true })
  layer5Weight: number;

  @ApiProperty({ example: "", description: 'Style notice of the product' })
  @Prop({ type: String, required: false })
  styleNotice: string;

  @ApiProperty({ example: "", description: 'Washing instructions of the product' })
  @Prop({ type: String, required: true })
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