import { Guest } from "../../../../../../guest/database/repositories/impl/typeorm/entities/guest.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";


@Entity()
export class Gift {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    photoUrl: string;

    @Column()
    quantity: number;

    @Column()
    description: string;
    
    @ManyToMany(() => Guest, (guest) => guest.gifts)
    @JoinTable()
    guests: Guest[];

}
