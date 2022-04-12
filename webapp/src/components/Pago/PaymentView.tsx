import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from '../comun/MenuBar';
import FormularioPago from './FormularioPago';
import { ProductCart } from '../../shared/shareddtypes';

const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "30px 50px 60px 50px",
        boxSizing:"border-box",
    },
  
  });

  type Props = {
    cartItems: ProductCart[]
  };
export const PaymentView:React.FC<Props> = ({ cartItems }) => {
    const classes = useStyle();
    return(
    <React.Fragment>
        <div className={classes.container}>
        <MenuBar cartItems={cartItems}/>
        </div>
        <div>
        <FormularioPago/>
        </div>
    </React.Fragment>
    );
};

export default PaymentView;
