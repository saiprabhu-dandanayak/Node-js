import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    HasOne,
    HasMany,
  } from "sequelize-typescript";
import { AdverseAction } from "./AdverseActionModel";
import { CandidateInfo } from "./CandidateInfoModel";
import { CourtSearch } from "./CourtSearchModel";

  
  @Table({
    tableName: "candidate",
    timestamps: false,
  })
  export class Candidate extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column(DataType.STRING)
    name!: string;
  
    @Column(DataType.ENUM("clear", "consider", "scheduled"))
    adjudication!: "clear" | "consider" | "scheduled";
  
    @Column(DataType.ENUM("clear", "consider", "scheduled"))
    status!: "clear" | "consider" | "scheduled";
  
    @Column(DataType.STRING)
    location!: string;
  
    @Column(DataType.DATE)
    event_date!: Date;
  
    @HasOne(() => CandidateInfo)
    candidateInfo!: CandidateInfo;
  
    @HasMany(() => CourtSearch)
    courtSearches!: CourtSearch[];
  
    @HasMany(() => AdverseAction)
    adverseActions!: AdverseAction[];
  }
  