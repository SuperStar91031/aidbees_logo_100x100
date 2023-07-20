import axios from "axios";
import authHeader from "./auth-header";

/*import * as globalSettings from './../globalSettings';

const API_URL = globalSettings.API_URL;*/

const API_URL = process.env.REACT_APP_API_URL;

class DonationService {
  /*insert(country_id, state_name) {
    return axios
      .post(API_URL + "Api/state/add", { country_id, state_name }, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  } */

  getDonationInfo(ngoid) {
    return axios
      .get(API_URL + "api/donation_info_for_payment?ngo_id="+ngoid, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
  
   getCommissionDetails(){
    
    return axios
    
    .get(API_URL + "api/admin/commission/list", { headers: authHeader() })
    .then((response) =>{
      return response.data
    });
  }
checkUniqueEmail(email){
    return axios
      .post(API_URL + "api/check_unique_email", {email}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
}
  SaveDonatedVisitor(fname,lname,emailId,contactno) {

  	const insertData = new FormData();
    insertData.set('name', fname+" "+lname);
    insertData.set('email_id', emailId);
    insertData.set('mobile_no', contactno);
insertData.set('pan_card_no', "");
insertData.set('aadhar_card_no', "");

    return axios
      .post(API_URL + "api/direct_donation_reg",insertData, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
checkAdharPanSaved(user_id){
  return axios
    .post(API_URL + "api/user/user_is_aadhar_pan", {user_id}, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
}
captureOrder(paymentId,total_amount){
  const insertData = new FormData();
  insertData.set('paymentId', paymentId);
  insertData.set('orderamount', total_amount);

 
 return axios
      .post(API_URL + "api/razorpay/ordercapture/",insertData)
      .then ((response) => {
        return response.data;
     //   axios.post(url, insertData)
      }); 
}
createOrder(donationAmount){
  const insertData = new FormData();
  insertData.set('Donation_Amount', donationAmount);
 

 
 return axios
      .post(API_URL + "api/razorpay/ordercreate",insertData)
      .then ((response) => {
        return response.data;
     //   axios.post(url, insertData)
      }); 
}
//(ngo_actno,ngo_amount,total_amount,is_campaign,post_id,user_id,ngo_id,aidbees_comm,response.razorpay_payment_id,response.razorpay_order_id
 callRazorPay(is_80g_receipt, ngo_accountno,ngo_amount,  Donation_Amount,is_campaign,post_id,user_id,ngo_id,aidbees_comm,razorpay_payment_id,razorpay_order_id){
  
  const insertData = new FormData();
  insertData.set('ngo_accountno', ngo_accountno);
  insertData.set("ngo_amount",ngo_amount );

  insertData.set('Donation_Amount', Donation_Amount);
  insertData.set('is_campaign',is_campaign)
  insertData.set('post_id',post_id)
  insertData.set('user_id',user_id)
  insertData.set('ngo_id',ngo_id)
  insertData.set('aidbees_comm',aidbees_comm)
  insertData.set('payment_id',razorpay_payment_id)
  insertData.set('order_id',razorpay_order_id)

console.log("donation sservice is_80g_receipt:");
console.log(is_80g_receipt);
console.log(typeof is_80g_receipt);

  if(is_80g_receipt && typeof is_80g_receipt !=="undefined" && is_80g_receipt!=="" || (is_80g_receipt ==="1" || is_80g_receipt ===1)){
    insertData.set('is_80g_receipt',1);
  }else{
    insertData.set('is_80g_receipt',0);
  }
  
  //const captureResponse =''
 return axios
      .post(API_URL + "api/razorpay/order",insertData)
      .then ((response) => {
        return response.data;
     //   axios.post(url, insertData)
      }); 

  /*const options = {
    key: process.env.RAZOR_PAY_TEST_KEY,
    name: "Your App Name",
    description: "Some Description",
    
    handler: async (response) => {
      try {
        const url = API_URL + "api/razorpay/order";
      
       const captureResponse = await axios.post(url, insertData)
       const paymentId = captureResponse.id;
      console.log("captureResponse.data");
       console.log(captureResponse.data);
      } catch (err) {
        console.log(err);
      }
    },
    theme: {
      color: "#686CFD",
    },
  
  } */

  //const accountUrl = `${RAZORPAY_URL}beta/accounts`;
//const response = await axios.get(accountUrl);




 

}
}

export default new DonationService();