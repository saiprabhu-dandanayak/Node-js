import {
    Table,
    Column,
    DataType,
    Model,
    AllowNull,
    PrimaryKey,
    AutoIncrement,
    Unique
  } from "sequelize-typescript";
  
  @Table({
    tableName: "users",
    timestamps: true,
  })
  export class User extends Model {
 
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @AllowNull(false)
    @Column({
      type: DataType.STRING,
      validate: {
        len: [3, 50],
      },
    })
    name!: string;
  
    @AllowNull(false)
    @Unique(true)
    @Column({
      type: DataType.STRING,
      validate: {
        isEmail: true, 
      },
    })
    email!: string;
  
    @AllowNull(false)
    @Column({
      type: DataType.STRING,
    })
    password!: string;
  }
  