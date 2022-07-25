import axios from 'axios';
import { GET_PRODUCTS, PRODUCT_ERROR } from './constants';

export const getListings = () => async (dispatch) => {
  try {
    const res = await axios.get('/v1/products/gen');
    let results = res.data.electricity.map((product) => {
      return {
        id: product.id,
        logo: product.provider_image,
        details: product.rates[0].price_fact_sheet,
        planDocument: product.plan_document,
        percentage: product.dmo_percentage.Ausgrid,
        planNameBelow: product.plan_name_below_data,
        benefits: [
          product.view_benefit,
          product.view_contract,
          product.view_exit_fee,
          product.view_discount,
        ],
        solarDescription: product.solar_description,
        solarPrice: product.solar_rate_normal,
        intro: product.dmo_content,
        extraBenefits: [product.cooling_off_period],
        annualBill: product.expected_annually_bill_amount,
        monthlyBill: product.expected_monthly_bill_amount,
        billingOptions: product.billing_options   
      };
    });
    dispatch({
      type: GET_PRODUCTS,
      payload: results,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err },
    });
  }
};


export const changeList  = () => {
    

}