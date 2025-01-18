import { Gift } from "../../../../../../gift/database/repositories/impl/typeorm/entities/gift.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";


@Entity()
export class Guest {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @ManyToMany(() => Gift, (gift) => gift.guests)
    gifts: Gift[];

}
