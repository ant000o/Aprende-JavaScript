const pedidos = [
  { cliente: "Antonio", total: 50, entregado: true },
  { cliente: "Juan", total: 20, entregado: false },
  { cliente: "Ana", total: 100, entregado: true },
  { cliente: "Pedro", total: 15, entregado: false },
];

// Debe devolver
// {
//   entregados: [...],
//   pendientes: [...],
//   totalGanado: number,
//   promedioPedido: number,
//   clienteMayorCompra: "Ana" // el que más gastó
// }

const analizarPedidos1 = (pedidos) => {
  const entregados = pedidos.filter((pedido) => pedido.entregado === true);
  const pendientes = pedidos.filter((pedido) => pedido.entregado === false);
  const totalGanado = pedidos.reduce((acc, pedido) => acc + pedido.total, 0);
  const promedioPedido = totalGanado / pedidos.length;
  const orden = pedidos.toSorted((a, b) => a.total - b.total);
  const clienteMayorCompra = orden[orden.length - 1].cliente;

  return {
    entregados,
    pendientes,
    totalGanado,
    promedioPedido,
    clienteMayorCompra,
  };
};
// console.log(analizarPedidos1(pedidos));



// version epica corregida por chatgpt unu
const analizarPedidos = (pedidos) => {
  const { entregados, pendientes } = pedidos.reduce(
    (acc, pedido) => {
      if (pedido.entregado) acc.entregados.push(pedido);
      else acc.pendientes.push(pedido);
      return acc;
    },
    { entregados: [], pendientes: [] },
  );

  const totalGanado = pedidos.reduce((acc, p) => acc + p.total, 0);

  const promedioPedido = pedidos.length ? totalGanado / pedidos.length : 0;

  const clienteMayorCompra = pedidos.reduce((max, pedido) =>
    pedido.total > max.total ? pedido : max,
  ).cliente;

  return {
    entregados,
    pendientes,
    totalGanado,
    promedioPedido,
    clienteMayorCompra,
  };
};
console.log(analizarPedidos(pedidos));
