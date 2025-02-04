import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("Porteur")
export class Porteur {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text',{name:"firstName",nullable:true})
    firstName: string;
  
    @Column('text',{name:"lastName",nullable:true})
    lastName: string;
  
    @Column('text',{name:"adresse",nullable:true})
    adresse: string;

    @Column('text',{name:"zonesecurite",nullable:false})
    zonesecurite: string;

    @Column('text',{name:"maladie",nullable:true})
    maladie: string;

    @Column('text',{name:"rythmeCardMin",nullable:false})
    rythmeCardMin: string;

    @Column('text',{name:"rythmeCardMax",nullable:false})
    rythmeCardMax: string;

    @Column('text',{name:"températureMin",nullable:false})
    températureMin: string;

    @Column('text',{name:"températureMax",nullable:false})
    températureMax: string;

    @Column('text',{name:"tensionMin",nullable:false})
    tensionMin: string;

    @Column('text',{name:"tensionMax",nullable:false})
    tensionMax: string;

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
