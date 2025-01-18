import { Guest } from "../../../../../../guest/database/repositories/impl/typeorm/entities/guest.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";

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
    
    @OneToMany(() => GiftGuest, giftGuest => giftGuest.gift)
    guests: GiftGuest[];
}

@Entity()
export class GiftGuest {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Gift, gift => gift.guests)
    gift: Gift;

    @ManyToOne(() => Guest, guest => guest.gifts)
    guest: Guest;

    @Column()
    count: number;
}
