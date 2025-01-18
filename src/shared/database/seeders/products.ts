import { Product, ProductType, ProductSubType } from "../../../modules/gift/database/repositories/impl/typeorm/entities/gift.entity";
import dataSource from "../../../config/database/typeorm/data-source";

export const seedProducts = async () => {
    const productRepository = dataSource.getRepository(Product);

    await productRepository.upsert(products, {
        conflictPaths: ["code"]
    });
};

const products = [
    {
      "code": "1",
      "name": "Algodão herbáceo",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/algodão_herbáceo"
    },
    {
      "code": "2",
      "name": "Amendoim",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/amendoim"
    },
    {
      "code": "3",
      "name": "Arroz",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/arroz"
    },
    {
      "code": "4",
      "name": "Aveia",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/aveia"
    },
    {
      "code": "5",
      "name": "Centeio",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/centeio"
    },
    {
      "code": "6",
      "name": "Cevada",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/cevada"
    },
    {
      "code": "7",
      "name": "Feijão",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/feijão"
    },
    {
      "code": "8",
      "name": "Girassol",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/girassol"
    },
    {
      "code": "9",
      "name": "Mamona",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/mamona"
    },
    {
      "code": "10",
      "name": "Milho",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/milho"
    },
    {
      "code": "11",
      "name": "Soja",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/soja"
    },
    {
      "code": "12",
      "name": "Sorgo",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/sorgo"
    },
    {
      "code": "13",
      "name": "Trigo",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/trigo"
    },
    {
      "code": "14",
      "name": "Triticale",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/triticale"
    },
    {
      "code": "15",
      "name": "Castanha-de-caju",
      "type": "Agricultura" as ProductType,
      "subType": "Cereais, Leguminosas e Oleaginosas" as ProductSubType,
      "picture": "url/da/imagem/do/castanha-de-caju"
    },
    {
      "code": "16",
      "name": "Café arábica",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/café_arábica"
    },
    {
      "code": "17",
      "name": "Café canephora",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/café_canephora"
    },
    {
      "code": "18",
      "name": "Café conilon",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/café_conilon"
    },
    {
      "code": "19",
      "name": "Cana-de-açúcar",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/cana-de-açúcar"
    },
    {
      "code": "20",
      "name": "Fumo",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/fumo"
    },
    {
      "code": "21",
      "name": "Juta",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/juta"
    },
    {
      "code": "22",
      "name": "Malva",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/malva"
    },
    {
      "code": "23",
      "name": "Pimenta-do-reino",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/pimenta-do-reino"
    },
    {
      "code": "24",
      "name": "Sisal ou agave",
      "type": "Agricultura" as ProductType,
      "subType": "Demais" as ProductSubType,
      "picture": "url/da/imagem/do/sisal_ou_agave"
    },
    {
      "code": "25",
      "name": "Abacaxi",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/abacaxi"
    },
    {
      "code": "26",
      "name": "Abacate",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/abacate"
    },
    {
      "code": "27",
      "name": "Acerola",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/acerola"
    },
    {
      "code": "28",
      "name": "Amora",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/amora"
    },
    {
      "code": "29",
      "name": "Araticum",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/araticum"
    },
    {
      "code": "30",
      "name": "Açaí",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/açaí"
    },
    {
      "code": "31",
      "name": "Bacaba",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/bacaba"
    },
    {
      "code": "32",
      "name": "Banana",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/banana"
    },
    {
      "code": "33",
      "name": "Bacuri",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/bacuri"
    },
    {
      "code": "34",
      "name": "Buriti",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/buriti"
    },
    {
      "code": "35",
      "name": "Biribá",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/biribá"
    },
    {
      "code": "36",
      "name": "Cajá",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/cajá"
    },
    {
      "code": "37",
      "name": "Carambola",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/carambola"
    },
    {
      "code": "38",
      "name": "Cacau",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/cacau"
    },
    {
      "code": "39",
      "name": "Caqui",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/caqui"
    },
    {
      "code": "40",
      "name": "Cereja",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/cereja"
    },
    {
      "code": "41",
      "name": "Cidra",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/cidra"
    },
    {
      "code": "42",
      "name": "Coco-da-baía",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/coco-da-baía"
    },
    {
      "code": "43",
      "name": "Cupuaçu",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/cupuaçu"
    },
    {
      "code": "44",
      "name": "Damasco",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/damasco"
    },
    {
      "code": "45",
      "name": "Durião",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/durião"
    },
    {
      "code": "46",
      "name": "Embaúba",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/embaúba"
    },
    {
      "code": "47",
      "name": "Figo",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/figo"
    },
    {
      "code": "48",
      "name": "Framboesa",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/framboesa"
    },
    {
      "code": "49",
      "name": "Goiaba",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/goiaba"
    },
    {
      "code": "50",
      "name": "Graviola",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/graviola"
    },
    {
      "code": "51",
      "name": "Groselha",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/groselha"
    },
    {
      "code": "52",
      "name": "Guaraná",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/guaraná"
    },
    {
      "code": "53",
      "name": "Heisteria",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/heisteria"
    },
    {
      "code": "54",
      "name": "Ingá",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/ingá"
    },
    {
      "code": "55",
      "name": "Jaca",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/jaca"
    },
    {
      "code": "56",
      "name": "Jambo",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/jambo"
    },
    {
      "code": "57",
      "name": "Jaboticaba",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/jaboticaba"
    },
    {
      "code": "58",
      "name": "Jenipapo",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/jenipapo"
    },
    {
      "code": "59",
      "name": "Kiwi",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/kiwi"
    },
    {
      "code": "60",
      "name": "Laranja",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/laranja"
    },
    {
      "code": "61",
      "name": "Limão",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/limão"
    },
    {
      "code": "62",
      "name": "Lichia",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/lichia"
    },
    {
      "code": "63",
      "name": "Maçã",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/maçã"
    },
    {
      "code": "64",
      "name": "Mamão",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/mamão"
    },
    {
      "code": "65",
      "name": "Manga",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/manga"
    },
    {
      "code": "66",
      "name": "Marmelo",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/marmelo"
    },
    {
      "code": "67",
      "name": "Mangaba",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/mangaba"
    },
    {
      "code": "68",
      "name": "Maracujá",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/maracujá"
    },
    {
      "code": "69",
      "name": "Melancia",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/melancia"
    },
    {
      "code": "70",
      "name": "Melão",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/melão"
    },
    {
      "code": "71",
      "name": "Morango",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/morango"
    },
    {
      "code": "72",
      "name": "Nectarina",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/nectarina"
    },
    {
      "code": "73",
      "name": "Nêspera",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/nêspera"
    },
    {
      "code": "74",
      "name": "Olho-de-boi",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/olho-de-boi"
    },
    {
      "code": "75",
      "name": "Pêra",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/pêra"
    },
    {
      "code": "76",
      "name": "Pêssego",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/pêssego"
    },
    {
      "code": "77",
      "name": "Physalis",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/physalis"
    },
    {
      "code": "78",
      "name": "Pequi",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/pequi"
    },
    {
      "code": "79",
      "name": "Pitanga",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/pitanga"
    },
    {
      "code": "80",
      "name": "Pitaya",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/pitaya"
    },
    {
      "code": "81",
      "name": "Pupunha",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/pupunha"
    },
    {
      "code": "82",
      "name": "Quina",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/quina"
    },
    {
      "code": "83",
      "name": "Romã",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/romã"
    },
    {
      "code": "84",
      "name": "Seriguela",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/seriguela"
    },
    {
      "code": "85",
      "name": "Sapoti",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/sapoti"
    },
    {
      "code": "86",
      "name": "Tâmara",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/tâmara"
    },
    {
      "code": "87",
      "name": "Tamarindo",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/tamarindo"
    },
    {
      "code": "88",
      "name": "Tangerina",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/tangerina"
    },
    {
      "code": "89",
      "name": "Tucumã",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/tucumã"
    },
    {
      "code": "90",
      "name": "Umbu",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/umbu"
    },
    {
      "code": "91",
      "name": "Uva",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/uva"
    },
    {
      "code": "92",
      "name": "Veludo",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/veludo"
    },
    {
      "code": "93",
      "name": "Wampee",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/wampee"
    },
    {
      "code": "94",
      "name": "Xixá",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/xixá"
    },
    {
      "code": "95",
      "name": "Yamamono",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/yamamono"
    },
    {
      "code": "96",
      "name": "Zimbro",
      "type": "Agricultura" as ProductType,
      "subType": "Fruta" as ProductSubType,
      "picture": "url/da/imagem/do/zimbro"
    },
    {
      "code": "97",
      "name": "Alho",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/alho"
    },
    {
      "code": "98",
      "name": "Batata - inglesa",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/batata_-_inglesa"
    },
    {
      "code": "99",
      "name": "Cará",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/cará"
    },
    {
      "code": "100",
      "name": "Inhame",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/inhame"
    },
    {
      "code": "101",
      "name": "Batata-doce",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/batata-doce"
    },
    {
      "code": "102",
      "name": "Cebola",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/cebola"
    },
    {
      "code": "103",
      "name": "Mandioca",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/mandioca"
    },
    {
      "code": "104",
      "name": "Tomate",
      "type": "Agricultura" as ProductType,
      "subType": "Legume" as ProductSubType,
      "picture": "url/da/imagem/do/tomate"
    },
    {
      "code": "105",
      "name": "Carne de galinha",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne_de_galinha"
    },
    {
      "code": "106",
      "name": "Ovo de Galinha pequeno",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_galinha_pequeno"
    },
    {
      "code": "107",
      "name": "Ovo de Galinha médio",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_galinha_médio"
    },
    {
      "code": "108",
      "name": "Ovo de Galinha grande",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_galinha_grande"
    },
    {
      "code": "109",
      "name": "Ovo de Galinha extra",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_galinha_extra"
    },
    {
      "code": "110",
      "name": "Ovo de Galinha",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_galinha"
    },
    {
      "code": "111",
      "name": "Ovo de Codorna",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_codorna"
    },
    {
      "code": "112",
      "name": "Carne de Pato",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne_de_pato"
    },
    {
      "code": "113",
      "name": "Ovo de Pato",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_pato"
    },
    {
      "code": "114",
      "name": "Carne de Ganso",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne_de_ganso"
    },
    {
      "code": "115",
      "name": "Ovo de Ganso",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_ganso"
    },
    {
      "code": "116",
      "name": "Carne de Peru",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne_de_peru"
    },
    {
      "code": "117",
      "name": "Ovo de Peru",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_peru"
    },
    {
      "code": "118",
      "name": "Carne de Avestruz",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne_de_avestruz"
    },
    {
      "code": "119",
      "name": "Ovo de Avestruz",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/ovo_de_avestruz"
    },
    {
      "code": "120",
      "name": "Pinto de 01 dia",
      "type": "Pecuária" as ProductType,
      "subType": "Avicultura" as ProductSubType,
      "picture": "url/da/imagem/do/pinto_de_01_dia"
    },
    {
      "code": "121",
      "name": "Carne",
      "type": "Pecuária" as ProductType,
      "subType": "Bovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne"
    },
    {
      "code": "122",
      "name": "Leite",
      "type": "Pecuária" as ProductType,
      "subType": "Bovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/leite"
    },
    {
      "code": "123",
      "name": "Couro",
      "type": "Pecuária" as ProductType,
      "subType": "Bovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/couro"
    },
    {
      "code": "124",
      "name": "Vivo",
      "type": "Pecuária" as ProductType,
      "subType": "Bovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/vivo"
    },
    {
      "code": "125",
      "name": "Corte",
      "type": "Pecuária" as ProductType,
      "subType": "Bubalinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/corte"
    },
    {
      "code": "126",
      "name": "Leite",
      "type": "Pecuária" as ProductType,
      "subType": "Bubalinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/leite"
    },
    {
      "code": "127",
      "name": "Vivo",
      "type": "Pecuária" as ProductType,
      "subType": "Bubalinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/vivo"
    },
    {
      "code": "128",
      "name": "Carne",
      "type": "Pecuária" as ProductType,
      "subType": "Caprinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne"
    },
    {
      "code": "129",
      "name": "Leite",
      "type": "Pecuária" as ProductType,
      "subType": "Caprinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/leite"
    },
    {
      "code": "130",
      "name": "Couro",
      "type": "Pecuária" as ProductType,
      "subType": "Caprinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/couro"
    },
    {
      "code": "131",
      "name": "Vivo",
      "type": "Pecuária" as ProductType,
      "subType": "Caprinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/vivo"
    },
    {
      "code": "132",
      "name": "Carne",
      "type": "Pecuária" as ProductType,
      "subType": "Ovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/carne"
    },
    {
      "code": "133",
      "name": "Leite",
      "type": "Pecuária" as ProductType,
      "subType": "Ovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/leite"
    },
    {
      "code": "134",
      "name": "Lã",
      "type": "Pecuária" as ProductType,
      "subType": "Ovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/lã"
    },
    {
      "code": "135",
      "name": "Vivo",
      "type": "Pecuária" as ProductType,
      "subType": "Ovinocultura" as ProductSubType,
      "picture": "url/da/imagem/do/vivo"
    },
    {
      "code": "136",
      "name": "Alevino",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/alevino"
    },
    {
      "code": "137",
      "name": "Rã",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/rã"
    },
    {
      "code": "138",
      "name": "Mexilhão",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/mexilhão"
    },
    {
      "code": "139",
      "name": "Tilápia",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/tilápia"
    },
    {
      "code": "140",
      "name": "Tambaqui",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/tambaqui"
    },
    {
      "code": "141",
      "name": "Surubim",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/surubim"
    },
    {
      "code": "142",
      "name": "Bagre",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/bagre"
    },
    {
      "code": "143",
      "name": "Curimatá",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/curimatá"
    },
    {
      "code": "144",
      "name": "Salmão",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/salmão"
    },
    {
      "code": "145",
      "name": "Pangasiu",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/pangasiu"
    },
    {
      "code": "146",
      "name": "Truta",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/truta"
    },
    {
      "code": "147",
      "name": "Piau",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/piau"
    },
    {
      "code": "148",
      "name": "Esturjão",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/esturjão"
    },
    {
      "code": "149",
      "name": "Traíra",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/traíra"
    },
    {
      "code": "150",
      "name": "Carpa",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/carpa"
    },
    {
      "code": "151",
      "name": "Outros",
      "type": "Pecuária" as ProductType,
      "subType": "Pesca e Aquicultura" as ProductSubType,
      "picture": "url/da/imagem/do/outros"
    }
  ]
