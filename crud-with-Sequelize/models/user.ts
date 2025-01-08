import {
    Table,
    Column,
    DataType,
    Model,
    IsEmail,
    Length,
    AllowNull,
  } from "sequelize-typescript";
  
  @Table({
    tableName: "users",
    timestamps: true,
  })
  export class User extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    })
    id!: number;
  
    @AllowNull(false)
    @Length({ min: 3, max: 50 })
    @Column({
      type: DataType.STRING,
    })
    name!: string;
  
    @AllowNull(false)
    @IsEmail
    @Column({
      type: DataType.STRING,
      unique: true,
    })
    email!: string;
  
    @AllowNull(false)
    @Column({
      type: DataType.STRING,
    })
    password!: string;
  }
  