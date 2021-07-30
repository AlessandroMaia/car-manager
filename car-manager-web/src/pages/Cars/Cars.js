import { Table, TableHead, TableRow, TableCell, TableBody, Button, Select } from '@material-ui/core';
import React, { Component } from 'react';
import api from '../../services/api';
import "./styles.css";


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Cars extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            brands: [],
            open: false,
            nome: "",
            km_por_galao: "",
            cilindros: "",
            peso: "",
            aceleracao: "",
            ano: "",
            origem: "",
            marca_id: "",
            car: {
                nome: "",
                km_por_galao: "",
                cilindros: "",
                peso: "",
                aceleracao: "",
                ano: "",
                origem: "",
                marca_id: ""
            },
            whichIs: ""
        }



    }

    componentDidMount() {
        this.getCars();
        this.getBrands();
    }

    getCars() {
        api.get("/cars").then((data) => {
            this.setState({ cars: data.data })
        })
    }

    getBrands() {
        api.get("/brands").then((data) => {
            this.setState({ brands: data.data })
        })
    }

    postCar() {
        const { nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id } = this.state.car

        if (!nome || !km_por_galao || !cilindros || !peso || !aceleracao || !ano || !origem) {
            this.setState({ error: "Preencha todos os dados para se cadastrar!" });
        } else {
            try {
                api.post("/car", { nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id })
                    .then(() => this.handleCloseModal())

            } catch {
                this.setState({ error: "Ocorreu um erro!" });
            }
        }
    }

    putCar(id) {
        const { nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id } = this.state.car

        if (!nome || !km_por_galao || !cilindros || !peso || !aceleracao || !ano || !origem) {
            this.setState({ error: "Preencha todos os dados para se cadastrar!" });
        } else {
            try {
                api.put("/car", {id, nome, km_por_galao, cilindros, peso, aceleracao, ano, origem, marca_id })
                    .then(() => this.handleCloseModal())

            } catch {
                this.setState({ error: "Ocorreu um erro!" });
            }
        }
    }

    deleteCar(id) {
        api.delete(`/car/${id}`).then(() => {
            this.getCars();
            this.getBrands();
        })
    }

    handleOpenModal(car, whichIs) {
        this.setState({ open: true })
        this.setState({ car: car })
        this.setState({ whichIs: whichIs })


    };

    handleCloseModal() {
        this.setState({ open: false })
        this.getCars();
        this.getBrands();
        this.setState({ car: {} })
        this.setState({ whichIs: "" })
    };

    brandItem() {
        const { brands } = this.state
        return brands ? brands.map(brand => this._renderBrandItem(brand)) : []
    }

    _renderBrandItem(brand) {
        return (
            <option value={brand.id}>{brand.nome}</option>
        )
    }

    carItem() {
        const { cars } = this.state
        return cars ? cars.map(car => this._renderCarItem(car)) : []
    }

    _renderCarItem(car) {
        return (
            <TableRow>
                <TableCell>{car.nome}</TableCell>
                <TableCell>{car.origem}</TableCell>
                <TableCell>{car.ano}</TableCell>
                <TableCell>
                    <div>
                        <div><a onClick={() => this.handleOpenModal(car, "edit")}>Editar</a></div>
                        <div><a onClick={() => this.deleteCar(car.id)}>Deletar</a></div>
                        <div><a onClick={() => this.handleOpenModal(car, "details")}>Detalhes</a></div>
                    </div>
                </TableCell>
            </TableRow>
        )
    }

    _renderModalCar() {
        const { car, whichIs, open, error } = this.state

        return (
            <div>
                <Dialog open={open} onClose={() => this.handleCloseModal()} aria-labelledby="form-dialog-title">
                    {whichIs === "edit" ?
                        <DialogTitle id="form-dialog-title">EDITAR CARRO</DialogTitle>
                        :
                        <DialogTitle id="form-dialog-title">CADASTRO DE UM NOVO CARRO</DialogTitle>
                    }
                    <DialogContent>
                        <form >
                            {error && <p>{error}</p>}
                            <span>nome:</span>
                            <input
                                class="input"
                                type="text"
                                placeholder="Nome"
                                value={car.nome}
                                onChange={e => this.setState({ car: Object.assign(this.state.car, { nome: e.target.value }) })}
                            />
                            <input
                                class="input"
                                type="text"
                                placeholder="Kilometros por galão"
                                value={car.km_por_galao}
                                onChange={e => this.setState({ car: Object.assign(this.state.car, { km_por_galao: e.target.value }) })}
                            />
                            <input
                                type="text"
                                placeholder="Cilindros"
                                value={car.cilindros}
                                onChange={e => this.setState({ car: Object.assign(this.state.car, { cilindros: e.target.value }) })}
                            />
                            <input
                                type="text"
                                placeholder="Peso"
                                value={car.peso}
                                onChange={e => this.setState({ car: Object.assign(this.state.car, { peso: e.target.value }) })}
                            />
                            <input
                                type="text"
                                placeholder="Aceleração"
                                value={car.aceleracao}
                                onChange={e => this.setState({ car: Object.assign(this.state.car, { aceleracao: e.target.value }) })}
                            />
                            <input
                                type="text"
                                placeholder="Ano"
                                value={car.ano}
                                onChange={e => this.setState({ car: Object.assign(this.state.car, { ano: e.target.value }) })}
                            />
                            <input
                                type="text"
                                placeholder="Origem"
                                value={car.origem}
                                onChange={e => this.setState({ car: Object.assign(this.state.car, { origem: e.target.value }) })}
                            />
                            <Select className="select_marca" value={car.marca_id} onChange={e => this.setState({ car: Object.assign(this.state.car, { marca_id: e.target.value }) })}>
                                {this.brandItem()}
                            </Select>
                            <hr />
                        </form>

                    </DialogContent>
                    <DialogActions>
                        {whichIs !== "details" &&
                            whichIs === "edit" ?
                            <button onClick={() => this.putCar(car.id)}>Editar</button>
                            :
                            <button onClick={() => this.postCar()}>Cadastrar</button>
                        }
                        <Button onClick={() => this.handleCloseModal()} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        )
    }

    render() {
        return (
            <div className="container">
                <Button className="btn-new" onClick={() => this.handleOpenModal(this.state.car)}>Novo carro</Button>
                <Table className="table-car">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Origem</TableCell>
                            <TableCell>Ano</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.carItem()}
                    </TableBody>
                </Table>
                {this._renderModalCar()}
            </div>
        )

    }
}



export default Cars