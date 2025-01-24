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
    tableName: "candidate_info",
    timestamps: false,
  })
  export class CandidateInfo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @ForeignKey(() => Candidate)
    @Column(DataType.INTEGER)
    candidate_id!: number;
  
    @BelongsTo(() => Candidate)
    candidate!: Candidate;
  
    @Column(DataType.STRING)
    email!: string;
  
    @Column(DataType.DATE)
    dob!: Date;
  
    @Column(DataType.STRING)
    phone_number!: string;
  
    @Column(DataType.STRING)
    zipcode!: string;
  
    @Column(DataType.STRING)
    social_security!: string;
  
    @Column(DataType.STRING)
    driver_license!: string;
  
    @Column(DataType.DATE)
    created_at!: Date;
  
    @Column(DataType.DATE)
    updated_at!: Date;
  
    @Column(DataType.STRING)
    package!: string;
  
    @Column(DataType.DATE)
    report_created_at!: Date;
  
    @Column(DataType.DATE)
    report_completion_date!: Date;
  
    @Column(DataType.DATE)
    turn_around_time!: Date;
  }
  