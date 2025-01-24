import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
import { Candidate } from "./CandidateModel";
  
  @Table({
    tableName: "adverse_action",
    timestamps: false,
  })
  export class AdverseAction extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column(DataType.STRING)
    name!: string;
  
    @Column(DataType.ENUM("clear", "consider", "scheduled"))
    action_status!: "clear" | "consider" | "scheduled";
  
    @Column(DataType.DATE)
    pre_notice_date!: Date;
  
    @Column(DataType.DATE)
    post_notice_date!: Date;
  
    @ForeignKey(() => Candidate)
    @Column(DataType.INTEGER)
    candidate_id!: number;
  
    @BelongsTo(() => Candidate)
    candidate!: Candidate;
  
    @Column(DataType.DATE)
    created_at!: Date;
  
    @Column(DataType.DATE)
    updated_at!: Date;
  }
  