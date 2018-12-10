import React from 'react'
import { server_url } from '../../lib/config';
import fetch from 'node-fetch';
import { navigate } from "@reach/router";
//import { web3 } from '../../lib/eth';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';

const styles = theme => ({

    paper: {
        maxWidth: '550px',
        margin: 'auto',
        marginTop: theme.spacing.unit * 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class DappCreate extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            contract: {},
            inputlist: [],
            deploydata: {}
        }
    }

    componentWillMount() {
        fetch(`${server_url}/api/chain/abi?apiname=${this.props.name}`).then(res => res.json()).then(result => {
            // console.log(data);
            // console.log(result.data);
            let deploydata = {};
            if (result.code == 0) {
                let inputlist = [];
                //console.log(result);
                for (let itemapi of result.data.abi) {
                    if (itemapi.type == 'constructor') {
                        inputlist = itemapi.inputs;
                    }
                }

                for (let data of inputlist) {
                    deploydata[data.name] = '';
                }


                this.setState({
                    deploydata
                });
                //console.log(result.data);

                this.setState({
                    contract: result.data,
                    inputlist
                });
            }
        }).catch(function (e) {
            console.log("失败");
        });

    }

    SetInput = (name, event) => {
        console.log(event.target.value);
        console.log(name);
        let deploydata = this.state.deploydata;
        deploydata[name] = event.target.value;
        this.setState({
            deploydata
        });

    }

    delpoyContract = () => {
        console.log('::::=>>>');
        console.log(this.state.deploydata);
        // let argument = Object.values(this.state.deploydata)
        // console.log(argument);
        // var myContract = new web3.eth.Contract(this.state.contract.abi);
        // //console.log(this.state.contract);
        // myContract.deploy({
        //     data: this.state.contract.bytecode,
        //     arguments: argument
        // })
        //     .send({
        //         from: '0x81D723361d4F3e648F2c9c479d88DC6dEBF4fA5f'
        //     }, (error, transactionHash) => {
        //         console.log(transactionHash, "<==transactionHash");
        //         this.postDapp(transactionHash);
        //     }

        //     ).then(function (transactionHash) {
        //         console.log(transactionHash) // instance with the new contract address
        //     });
    }



    postDapp = (txhash) => {

        let postData = {
            dappName: '',
            txHash: txhash,
            contractInfo: this.props.name,
            publicAddress: '0x81D723361d4F3e648F2c9c479d88DC6dEBF4fA5f',
            dappChain: 'kovan'
        }

        fetch(`${server_url}/api/dapp`, {
            body: JSON.stringify(postData),
            headers: {
                // Authorization: `Bearer ${auth}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json()).then(data => {
            if (data.id) {
                // navigateTo('/dapp/index')
                navigate(`/dapp/deployed/${txhash}`);
            }
        })
    }

    render() {
       
        let { contract, inputlist } = this.state;
        const { classes } = this.props;
        console.log(inputlist);
        const contractview = inputlist.map((data, index) => {
            const { name, type } = data;
                return (
                    <Grid key={index}   item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name={name}
                                label={name}
                                onChange={this.SetInput.bind(this,name)}
                                fullWidth
                                autoComplete="billing address-line1"
                            />
                    </Grid>
                    // <section key={index} className="hero is-primary" style={{'margin':'20px auto'}} >
                    //     <div className="hero-body">
                    //         <div className="container">
                    //             <h2 className="subtitle">
                    //                 类型:{contractInfo}
                    //             </h2>
                    //             <h2 className="subtitle">
                    //                 交易hash:
                    //             </h2>
                    //             <p className="subtitle is-6">
                    //                 <a href={'https://kovan.etherscan.io/tx/'+txHash} target="_Blank" >
                    //                 {txHash}
                    //                 </a> 
                    //             </p>
                    //         </div>
                    //     </div>
                    // </section>
                );
        });   
        return (
            <div style={{ minHeight: '600px' }}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" gutterBottom>
                        合约部署
                    </Typography>
                    <Grid container spacing={24}>

                        {/* <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="fromAddress"
                                fullWidth
                                autoComplete="billing address-line1"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="addiress2"
                                name="addiress2"
                                label="toAddress"
                                fullWidth
                                autoComplete="billing address-line2"
                            />
                        </Grid> */}

                        {contractview}

                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => this.delpoyContract()}
                    >
                        确认
                    </Button>
                </Paper>
            </div>
        );
    }
}

DappCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DappCreate);



