import {
    Table,
    Column,
    DataType,
    Model,
    ForeignKey,
    BelongsTo,
    AllowNull,
  } from 'sequelize-typescript';
  import { User } from './User';
  
  @Table({
    tableName: 'posts',
    timestamps: true,
  })
  export class Post extends Model {
    @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    })
    id!: number;
  
    @AllowNull(false)
    @Column(DataType.STRING)
    title!: string;
  
    @AllowNull(false)
    @Column(DataType.TEXT)
    content!: string;
  
    @ForeignKey(() => User) 
    @Column(DataType.INTEGER)
    userId!: number;
  
    @BelongsTo(() => User) 
    user!: User;
  }