import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text',{name:"firstName",nullable:true})
    firstName: string;
  
    @Column('text',{name:"lastName",nullable:true})
    lastName: string;
  

    @Column('text',{name:"role",nullable:true})
    role: string;

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
