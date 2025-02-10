import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("Soignant")
export class Soignant {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text',{name:"firstName",nullable:true})
    firstName: string;
  
    @Column('text',{name:"lastName",nullable:true})
    lastName: string;

    @Column('text',{name:"email",nullable:true})
    email: string;
  

    @Column('text',{name:"numero",nullable:true})
    numero: number;

    @Column('text',{name:"password",nullable:true})
    password: string;

    @Column( 'boolean',{name:"isActive",nullable:true ,default: true })
    isActive: boolean;

    @Column( 'date',{name:"createdAt",nullable:true  })
    createdAt: Date;

    @Column( 'date',{name:"updatedAt",nullable:true })
    updatedAt: Date;

    @Column( 'boolean',{name:"isDelete",nullable:true  })
    isDelete: Boolean;

}
