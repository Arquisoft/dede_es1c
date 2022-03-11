
import { CarroProducto } from "../shared/shareddtypes";

export function calcularTotal(products: CarroProducto[], gastoenvio: number): number {
    let total: number = 0;
    products.forEach((p: CarroProducto) => {
      total += p.unidad*p.producto.price;
    });
    total += gastoenvio;
    return total;
  }