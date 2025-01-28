import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("Client")
export class Client {
    @PrimaryGeneratedColumn()

    id:number;

    @Column('text',{name:'firstname' ,nullable:true })
    firstname:String;

    @Column('text',{name:'lastname' ,nullable:true })
    last:String;

    @Column('text',{name:'password' ,nullable:true })
    password:String;

    @Column('date',{name:'createdAt' ,nullable:true })
    createdAt:Date;

    @Column('date',{name:'updatedAt' ,nullable:true })
    updatedAt:Date;

    @Column('boolean',{name:'isdelete' ,nullable:true })
    isdelete:Boolean;

    @Column('boolean',{name:'isactive' ,nullable:true ,default:true})
    isactive:Boolean;

    

}
