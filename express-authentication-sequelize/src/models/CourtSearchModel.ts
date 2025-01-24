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
    tableName: "court_search",
    timestamps: false,
  })
  export class CourtSearch extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column(DataType.STRING)
    search!: string;
  
    @Column(DataType.ENUM("clear", "consider", "scheduled"))
    status!: "clear" | "consider" | "scheduled";
  
    @Column(DataType.DATE)
    event_date!: Date;
  
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
  