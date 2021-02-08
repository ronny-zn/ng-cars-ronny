import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CarData implements InMemoryDbService {

  createDb() {
    let cars = [
      {
        "id": 0,
        "title": "TOYOTA",
        "price": 26490,
        "cv": 170,
        "description": "Toyota Motor Corporation ​ más conocida como Toyota, es una compañía japonesa de fabricación de automóviles. Fundada en 1933 por Kiichiro Toyoda, su sede central se encuentra en Toyota y Bunkyō aunque, por su carácter multinacional, cuenta con fábricas y sedes en varios países",
        "modelos": ["Ateca", "Ibiza", "Arona"],
        "image": "https://thumbs.dreamstime.com/z/la-recogida-de-toyota-parque%C3%B3-en-el-puerto-bali-creta-87470576.jpg"
      },
      {
        "id": 1,
        "title": "VOLKSWAGEN Arteon",
        "price": 45000,
        "cv": 200,
        "description": "Volkswagen es un fabricante de automóviles alemán con sede en Wolfsburgo, Baja Sajonia.​ Volkswagen es la marca original y más vendida del Grupo Volkswagen, segundo fabricante de automóviles del mundo",
        "modelos": ["Passat", "Golf", "Polo", "T-Cross"],
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/volkswagen-arteon-r-line-edition-2020-1600-01-1578473714.jpg"
      },
      {
        "id": 2,
        "title": "MERCEDES-BENZ CLA",
        "price": 74099,
        "cv": 420,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "modelos": ["Clase A", "Clase B", "Clase C"],
        "image": "https://i.ytimg.com/vi/ReHbrgXuJTM/hqdefault.jpg"
      },
      {
        "id": 3,
        "title": "BMW",
        "price": 84799,
        "cv": 319,
        "description": "BMW pronunciación alemana:[be-em-ve] es un fabricante alemán de automóviles y motocicletas de alta gama y lujo, cuya sede se encuentra en Múnich. Sus subsidiarias son Mini, Rolls-Royce, y BMW Bank",
        "modelos": ["Serie 1", "Serie 4", "Serie 5"],
        "image": "https://img.motor16.com/modelos/bmw-serie-6-gt.jpg"
      },
      {
        "id": 4,
        "title": "AUDI R8 V10",
        "price": 94999,
        "cv": 500,
        "description": "Audi es una empresa multinacional alemana fabricante de automóviles de alta gama y deportivos. Su sede central se encuentra en Ingolstadt, Baviera y forma parte desde 1965 del Grupo Volkswage",
        "modelos": ["A8", "R6", "Q7"],
        "image": "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/58646/audi-r8_v10_decennium-2019-1600-01.jpg?crop=1xw:1.0xh;center,top&resize=1200:*"
      },
      {
        "id": 5,
        "title": "PORSCHE 911",
        "price": 54799,
        "cv": 476,
        "description": "Dr. Ing. h.c. F. Porsche AG, normalmente abreviado como Porsche, es un fabricante de automóviles alemán especializado en automóviles deportivos lujosos, de alta gama, SUV y sedanes. Porsche AG es propiedad del Grupo Volkswagen, ​ que a su vez es propiedad mayoritaria de Porsche Automóvil Holding SE.",
        "modelos": ["Panamera", "Macan", "Cayman", "Boxster"],
        "image": "https://periodismodelmotor.com/wp-content/uploads/2020/03/porsche-911-turbo-s-2020-1.jpg"
      }
    ];
    return { cars: cars };
  }
}
