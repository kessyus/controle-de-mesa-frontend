

const Pedido = ({cardapio}) => {
    return (
        <div>
            {cardapio && cardapio.length ? (
                <div>
                <h2>Pedido:</h2>
                    {cardapio && cardapio.map((v, i) => (
                        <p>{v.categoria}, {v.produto}, {v.preco}</p>
                    ))}
                </div>
            ) : (
                <div> Não existem pedidos</div>
            )}
        </div>
    )
}
export default Pedido