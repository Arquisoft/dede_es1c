import {ProductModel} from "../products/productModel";
import {ROLES, UserModel} from "../users/userModel";

export default async function create() {
    let juego1: string[] = ["deportes"];

    let juego2: string[] = ["deportes"];
    let juego3: string[] = ["acción", "aventuras", "estrategia"];
    let juego4: string[] = ["acción", "aventuras", "estrategia"];
    let juego5: string[] = ["estrategia", "acción"];
    let juego6: string[] = ["estrategia", "acción"];
    let juego8: string[] = ["estrategia", "acción"];
    let juego9: string[] = ["estrategia", "acción"];

    await ProductModel.deleteMany({});
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=15YbSwC0XyAWKpxQANq3YbIZBUm5YY--5 ' , name: 'Fifa 20', price:'20', stock:'2',description:'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993', categories:juego1})
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1vLpKO1Vd9HgJ0j1NQsrvyidlxMHZPRA- ', name: 'Fifa 19', price:'30', stock:'67', description:'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993',  categories:juego2 })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1uPsQkxuSttWE4-_uHvOhkanlZLF-RLMb ', name: 'Elden ring', price:'80', stock:'4', description:' rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment',  categories:juego3  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=10wG_nWYtlVgLnQFEIybwHD8l3ycTcqIk ', name: 'World of Warcraft', price:'29', stock:'2' , description:' rol multijugador masivo en línea desarrollado por Blizzard Entertainment.',  categories:juego4 })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R ', name:'League of Leguends', price:'50', stock:'2', description:'Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games',  categories:juego5  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1IZA82snexAD6qpokj5jzYiML4WprAHys ', name:'God of War', price:'30', stock:'8', description:' serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment',  categories:juego6  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=1X68RR3eLIPUna7H9H2OEmjstE_pdPwmA ', name:'Battlefield 2042', price:'36', stock:'10', description:' videojuego de disparos y acción bélica en primera persona', categories:juego8  })
    await ProductModel.create({photo:' https://drive.google.com/uc?export=view&id=17T2Ikaoq47h4Qj-SsfRQoqlnBjRJOQFJ ', name:'Dying Light', price:'6', stock:'3', description:' serie de videojuegos de acción', categories:juego9  })

    await UserModel.deleteMany({});
    await UserModel.create({password:'123', email:'a@gmail.com', role:ROLES.NORMAL})
    await UserModel.create({password:'123', email:'b@gmail.com', role:ROLES.ADMIN})
}

