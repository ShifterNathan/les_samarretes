import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Product extends Document {
  @ApiProperty({
    example: 'es_ES',
    description: 'Language code of the product',
  })
  @Prop({ type: String, required: true })
  languageCode: string;

  @ApiProperty({ example: 'STTU755C5042S', description: 'B2B SKU reference' })
  @Prop({ type: String, required: false })
  B2BSKUREF: string;

  @ApiProperty({ example: 'STTU755', description: 'Style code of the product' })
  @Prop({ type: String, required: false, unique: false })
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
  @Prop({ type: String, required: true })
  color: string;

  @ApiProperty({ example: 'Whites', description: 'Color group of the product' })
  @Prop({ type: String, required: false })
  colorGroup: string;

  @ApiProperty({ example: 'T-shirt', description: 'Type of the product' })
  @Prop({ type: String, required: true })
  type: string;

  @ApiProperty({ example: 'Tees', description: 'Category of the product' })
  @Prop({ type: String, required: true })
  category: string;

  @ApiProperty({ example: 'Unisex', description: 'Gender of the product' })
  @Prop({ type: String, required: false })
  gender: string;

  @ApiProperty({ example: '719', description: 'Stock of the product' })
  @Prop({ type: Number, required: true })
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

  @ApiProperty({ example: 1, description: 'Product certifications' })
  @Prop({ type: Number, required: false })
  publishedNewCollection: number;

  @ApiProperty({ example: true, description: 'Product certifications' })
  @Prop({ type: Boolean, required: false })
  stylePublishedNewCollection: boolean;

  @ApiProperty({ example: 0, description: 'Product certifications' })
  @Prop({ type: Number, required: false })
  certificationTriman: number;

  @ApiProperty({ example: 0, description: 'Product certifications' })
  @Prop({ type: Number, required: false })
  OEKOTexOrganic: number;

  @ApiProperty({ example: 'https://res.cloudinary.com/www-stanleystella-com/image/upload/v1679392718/Product%20Content/Certifications/GOTS85.png', description: 'Product certifications' })
  @Prop({ type: String, required: false })
  ecoClassLogoURL: string;

  @ApiProperty({ example: 'Made with 85% organic cotton', description: 'Product certifications' })
  @Prop({ type: String, required: false })
  ecoClassAlternateLogoText: string;

  @ApiProperty({ example: 'https://asset.cloudinary.com/www-stanleystella-com/047cd8cca9c7b3005cb6045625f3fdca', description: 'Product certifications' })
  @Prop({ type: String, required: false })
  ecoClassCertificatePDF: string;

  @ApiProperty({ example: 'https://res.cloudinary.com/www-stanleystella-com/image/upload/v1679392720/Product%20Content/Certifications/OekoTex2012163.png', description: 'Product certifications' })
  @Prop({ type: String, required: false })
  OEKOTexLogoURL: string;

  @ApiProperty({example: 'OEKO-Tex organic garment', description: 'Product certifications'})
  @Prop({ type: String, required: false})
  OEKOTexAlternateLogoText: string;

  @ApiProperty({example: 'https://res.cloudinary.com/www-stanleystella-com/image/upload/v1679392720/Product%20Content/Certifications/OekoTex2012163.png', description: 'Product certifications'})
  @Prop({ type: String, required: false})
  OEKOTexCertificatePDF: string;

  @ApiProperty({ example: true, description: "VEGAN" })
  @Prop({ type: Boolean, required: false })
  vegan: boolean;

  @ApiProperty({ example: "https://res.cloudinary.com/www-stanleystella-com/image/upload/v1679392720/Product%20Content/Certifications/PETAVegan.png", description: "VEGAN" })
  @Prop({ type: String, required: false })
  vegan_URL: string;

  @ApiProperty({ example: "Vegan", description: "Vegan alternate logo text" })
  veganAlternateLogoText

  @ApiProperty({ example: "https://res.cloudinary.com/www-stanleystella-com/image/upload/v1681718119/Marketing%20Content/API/Sustainability/STANLEYSTELLA_PETA_Certificate_2023_2024.pdf", description: "Vegan certificate PDF" })
  @Prop({ type: String, required: false })
  veganCertificatePDF

  @ApiProperty({ example: "1", description: "Fairwear certification" })
  @Prop({ type: Number, required: false })
  fairwear: number;

  @ApiProperty({ example: "https://res.cloudinary.com/www-stanleystella-com/image/upload/v1679392718/Product%20Content/Certifications/Fairwear.png", description: "Fairwear " })
  @Prop({ type: String, required: false })
  fairwear_URL: string;

  @ApiProperty({ example: "Fairwear", description: "Fairwear alternate logo text" })
  @Prop({ type: String, required: false })
  fairwearAlternateLogoText: string;

  @ApiProperty({ example: "https://www.fairwear.org/brands/stanley-and-stella", description: "Fairwear certificate PDF" })
  fairwearCertificatePDF: string;
}

export type ProductDocument = HydratedDocument<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
