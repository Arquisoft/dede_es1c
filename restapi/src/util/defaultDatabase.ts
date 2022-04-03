import {ProductModel} from "../products/model";
import {ROLES, UserModel} from "../users/model";

export default async function create() {
    await ProductModel.deleteMany({});
    await ProductModel.create({photo:' https://as01.epimg.net/meristation/imagenes/2019/08/20/cover/888153891566327582.jpg', name: 'Fifa 20', price:'20', stock:'2',description:'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993' })
    await ProductModel.create({photo:' https://s2.gaming-cdn.com/images/products/2665/orig/fifa-19-pc-juego-origin-cover.jpg', name: 'Fifa 19', price:'30', stock:'67', description:'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993' })
    await ProductModel.create({photo:' https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/0b0owDFqekJszSOQfD4vvTjy.png', name: 'Elden ring', price:'80', stock:'4', description:' rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment'  })
    await ProductModel.create({photo:' https://m.media-amazon.com/images/I/510Xjw4h8kS._AC_.jpg', name: 'World of Warcraft', price:'29', stock:'2' , description:' rol multijugador masivo en línea desarrollado por Blizzard Entertainment.' })
    await ProductModel.create({photo:' https://esports.eldesmarque.com/wp-content/uploads/2019/09/LoL-1.jpg ', name:'League of Leguends', price:'50', stock:'2', description:'Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games'  })
    await ProductModel.create({photo:' https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7 ', name:'God of War', price:'30', stock:'8', description:' serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment'  })
    await ProductModel.create({photo:' https://s1.gaming-cdn.com/images/products/6690/orig/battlefield-2042-pc-juego-origin-cover.jpg ', name:'Battlefield 2042', price:'36', stock:'10', description:' videojuego de disparos y acción bélica en primera persona'  })
    await ProductModel.create({photo:' https://cdn-products.eneba.com/resized-products/ux0dyaee3yxdxur1xu37_350x200_1x-0.jpg ', name:'Dying Light', price:'6', stock:'3', description:' serie de videojuegos de acción'  })

    await UserModel.deleteMany({});
    await UserModel.create({password:'123', email:'a@gmail.com', role:ROLES.NORMAL})
    await UserModel.create({password:'123', email:'b@gmail.com', role:ROLES.ADMIN})
}