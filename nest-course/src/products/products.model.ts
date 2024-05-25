import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'products' })
export class Product extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  image: string;

  @Column(DataType.FLOAT)
  price: number;

  @Column(DataType.STRING)
  category: string;

  @Column(DataType.TEXT)
  descriptionProduct: string;

  @Column(DataType.FLOAT)
  weight: number;

  @Column(DataType.BOOLEAN)
  wireless: boolean;

  @Column(DataType.INTEGER)
  count: number;
}