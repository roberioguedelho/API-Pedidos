import User from "../models/User";
import Produto from '../models/Produto'
import Pedido from '../models/Pedido'
import Mesa from '../models/Mesa'
import Item from '../models/Item'

class PedidoController {
  async store(req, res) {
    // const novoPedido = await Pedido.create({
    //   user_id: req.userId,
    //   mesa_id: req.body.mesa_id,
    //   valor: 0,
    //   status: 'ATIVO'
    // })

    // console.log(novoPedido);

    // for(let valor of req.body.item) {
    //   let produto = await Produto.findByPk(valor.produto_id);
    //   // console.log(novoPedido.id, produto.id, valor.quantidade, produto.valor)
    //   let novoItem = {
    //     pedido_id: novoPedido.id,
    //     produto_id: produto.id,
    //     quantidade: valor.quantidade,
    //     valor: produto.valor
    //   }
    //   novoItem = await Item.create(novoItem)

    //   console.log(novoItem)
    // }

    const pedidos = await Pedido.findByPk(12,{
      include: {
        model: Item,
        include: {
          model: Produto
        }
      },
    });

    // const produtos = await Pedido.findAll({
    //   include: {
    //     model: Item,
    //     include: {
    //       model: Produto
    //     }
    //   },
    // });
    return res.json(pedidos);

  }

}
export default new PedidoController();
