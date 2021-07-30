import { Table, TableHead, TableRow, TableCell, TableBody, Button, Select } from '@material-ui/core';
import React, { Component } from 'react';
import api from '../../services/api';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Brands extends Component {

    constructor(props) {
        super(props)
        this.state = {
            brands: [],
            open: false,
            brand: {
                nome: "",
                origem: ""
            },
            whichIs: ""
        }



    }

    componentDidMount() {
        this.getBrands();
    }

    getBrands() {
        api.get("/brands").then((data) => {
            this.setState({ brands: data.data })
        })
    }

    postBrand() {
        const { nome, origem} = this.state.brand

        if (!nome || !origem) {
            this.setState({ error: "Preencha todos os dados para se cadastrar!" });
        } else {
            try {
                api.post("/brand", { nome, origem})
                    .then(() => this.handleCloseModal())

            } catch {
                this.setState({ error: "Ocorreu um erro!" });
            }
        }
    }

    putBrand(id) {
        const { nome, origem} = this.state.brand

        if (!nome || !origem) {
            this.setState({ error: "Preencha todos os dados para se cadastrar!" });
        } else {
            try {
                api.put(`/brand`, {id, nome, origem })
                    .then(() => this.handleCloseModal())

            } catch {
                this.setState({ error: "Ocorreu um erro!" });
            }
        }
    }

    deleteBrand(id) {
        api.delete(`/Brand/${id}`).then(() => {
            this.getBrands();
        })
    }

    handleOpenModal(brand, whichIs) {
        this.setState({ open: true })
        this.setState({ brand: brand })
        this.setState({ whichIs: whichIs })
    };

    handleCloseModal() {
        this.setState({ open: false })
        this.getBrands();
        this.setState({ brand: {} })
        this.setState({ whichIs: "" })
    };

    brandItem() {
        const { brands } = this.state
        return brands ? brands.map(brand => this._renderBrandItem(brand)) : []
    }

    _renderBrandItem(brand) {
        return (
            <TableRow>
                <TableCell>{brand.nome}</TableCell>
                <TableCell>{brand.origem}</TableCell>
                <TableCell>
                    <div>
                        <div><a onClick={() => this.handleOpenModal(brand, "edit")}>Editar</a></div>
                        <div><a onClick={() => this.deleteBrand(brand.id)}>Deletar</a></div>
                        <div><a onClick={() => this.handleOpenModal(brand, "details")}>Detalhes</a></div>
                    </div>
                </TableCell>
            </TableRow>
        )
    }

    _renderModalBrand() {
        const { brand, whichIs, open, error } = this.state

        return (
            <div>
                <Dialog open={open} onClose={() => this.handleCloseModal()} aria-labelledby="form-dialog-title">
                    {whichIs === "edit" ?
                        <DialogTitle id="form-dialog-title">EDITAR MARCA</DialogTitle>
                        :
                        <DialogTitle id="form-dialog-title">CADASTRO DE UMA NOVA MARCA</DialogTitle>
                    }
                    <DialogContent>
                        <form >
                            {error && <p>{error}</p>}
                            <span>nome:</span>
                            <input
                                class="input"
                                type="text"
                                placeholder="Nome"
                                value={brand.nome}
                                onChange={e => this.setState({ brand: Object.assign(this.state.brand, { nome: e.target.value }) })}
                            />
                            <span>Origem:</span>
                            <input
                                type="text"
                                placeholder="Origem"
                                value={brand.origem}
                                onChange={e => this.setState({ brand: Object.assign(this.state.brand, { origem: e.target.value }) })}
                            />
                            <hr />
                        </form>

                    </DialogContent>
                    <DialogActions>
                        {whichIs !== "details" &&
                            whichIs === "edit" ?
                            <button onClick={() => this.putBrand(brand.id)}>Editar</button>
                            :
                            <button onClick={() => this.postBrand()}>Cadastrar</button>
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
                <Button className="btn-new" onClick={() => this.handleOpenModal(this.state.brand)}>Nova marca</Button>
                <Table className="table-car">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Origem</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.brandItem()}
                    </TableBody>
                </Table>
                {this._renderModalBrand()}
            </div>
        )

    }
}



export default Brands