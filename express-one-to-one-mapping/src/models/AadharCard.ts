import {
    Table,
    Column,
    DataType,
    Model,
    ForeignKey,
    BelongsTo,
    AllowNull,
    Unique,
  } from 'sequelize-typescript';
  import { User } from './User';
  
  @Table({
    tableName: 'aadharcards',
    timestamps: true,
  })
  export class AadharCard extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    })
    id!: number;
  
    @AllowNull(false)
    @Unique(true)
    @Column(DataType.STRING)
    aadharNumber!: string;
  
    @ForeignKey(() => User) 
    @Column(DataType.INTEGER)
    userId!: number;
  
    @BelongsTo(() => User) 
    user!: User;
  }