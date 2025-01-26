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
    HasMany,
  } from 'sequelize-typescript';
  import { Post } from './Post';
  
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
  
    @HasMany(() => Post) 
    posts!: Post[];
  }