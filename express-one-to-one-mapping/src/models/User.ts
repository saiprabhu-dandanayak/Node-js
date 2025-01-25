import {
    Table,
    Column,
    DataType,
    Model,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    Unique,
    IsEmail,
    HasOne,
  } from 'sequelize-typescript';
import { AadharCard } from './AadharCard';
  
  @Table({
    tableName: 'users',
    timestamps: true,
  })
  export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;
  
    @AllowNull(false)
    @Unique(true)
    @IsEmail
    @Column(DataType.STRING)
    email!: string;
  
    @AllowNull(false)
    @Column(DataType.STRING)
    password!: string;
  
    @HasOne(() => AadharCard) 
    aadharCard!: AadharCard;
  }