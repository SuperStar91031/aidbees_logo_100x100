import React, { Component } from "react";
import { Redirect, Router, Switch, Route, Link, NavLink } from "react-router-dom";
import {  TextInput } from "react-native";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import Hexagon from 'react-hexagon';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import axios from "axios";

import { MentionsInput, Mention } from 'react-mentions'

import ReactTooltip from 'react-tooltip';

import { connect } from "react-redux";

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';



import { clearMessage } from "../actions/message";

import { history } from '../helpers/history';

import { postLike, insertPost, insertDonationPost, insertCampaign, addValunteerPost, addGoodDonationPost, insertNgoPost, postInfo, postInfoModal, postCommentModal } from "../actions/userPost";

import { ngoListFilter } from "../actions/userNgo";

import { paymentUpdate } from "../actions/paymentData";

import GoogleLogin from 'react-google-login';

/*import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";*/

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import jQuery from 'jquery';
//import Popper from 'popper.js';

// import "./../../assets/css/bootstrap.min.css";
import "./../assets/css/font-awesome.min.css";
import "./../assets/css/custom.css";
import "./../App.css";

import report from './../assets/images/Report.png';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LeadAdd, LeadList, LeadEdit, LeadUpdate, LeadDelete } from "../actions/AdminLead";
import { ProductAdd, ProductList, ProductEdit, ProductUpdate, ProductDelete } from "../actions/AdminProduct";



toast.configure();


class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = {

      listProductData:[],
      first_name:'',
      last_name:'',
      mobile:'',
      email_id:'',
      lead_source:'Other',
      product:'',
      description:'',
    lead_status:7,
     
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {

this.ListProductFun();
 
  }

  ListProductFun = () => {

    const { dispatch, history } = this.props;
 dispatch(ProductList())
   .then((response) => {
     this.setState({
       listProductData: response.data
     });
    // this.TableDataUpdate();
   })
   .catch(() => {
     this.setState({
      listProductData: []
     });
   });
} 

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    // this.Addform.validateAll();

    const { dispatch, history } = this.props;
   
      if (this.checkBtn.context._errors.length === 0) {
       
      
        dispatch(LeadAdd(this.state.first_name, this.state.last_name, 91+this.state.mobile, this.state.email_id,
           this.state.lead_source, this.state.product, this.state.description,this.state.lead_status))
          .then((response) => {
            console.log("profile----handle", this.state.profile);
            
            if (response.success || response.success === "true" || response.success === true) {
              toast.success(response.message, { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
             //this.ListUserFun();
              this.setState({ first_name:'', last_name:'', mobile:'', email_id:'', lead_source:'', product:'', description:''});
              // window.location.reload();
               $("#AddLead").modal("hide");
               window.location.reload();
            } else {
              toast.error(response.message, { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeonClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
            }
          })
          .catch((error) => {
            this.setState({
              loading: false
            });
            toast.error("something went wrong..!!", { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
          });
      } else {
        this.setState({
          loading: false,
        });
        toast.error("something went wrong..!!", { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
      }
  }

  onChangeFirstName=(e)=>{
    this.setState({
      first_name: e.target.value,
    });
  }

  onChangeLastName=(e)=>{
    this.setState({
      last_name: e.target.value,
    });
  }

  onChangeMobile=(e)=>{
    this.setState({
      mobile: e.target.value,
    });
  }

  onChangeEmail=(e)=>{
    this.setState({
      email_id: e.target.value,
    });
  }

 

  onChangeProduct=(e)=>{
    this.setState({
      product: e.target.value,
    });
  }

  onChangeDescription=(e)=>{
    this.setState({
      description: e.target.value,
    });
  }


 

  render() {

    const { cropUserProfile, croppedImageUserProfile, croppedImageUrlUserProfile, srcUserProfile } = this.state;

    const { isLoggedIn, message } = this.props;

    return (
      <React.Fragment>
   


    {/* <div className="modal fade" id="AddLead" data-keyboard="false" data-backdrop="static">
        <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content pt-0 pb-2 px-3">
                <div className="modal-header border-0 pb-0">
                <button type="button" className="close" data-dismiss="modal"><img src={closeicon} width="20px" height="20px"/></button>
                </div> */}
                <div className="card  d-flex justify-content-center container" >
                <Form
                onSubmit={this.handleSubmit}
                ref={(c) => {
                  this.form = c;
                }}>
                    <h3 className="size24  mt-0 title ">Enquiry Form</h3>
                    <div className="row">
                        <div className="col-md-12 col-12 pl-md-0 position-relative">
                            <div className="row">
                          
                                <div className="col-sm-6 pb-2">
                                  <label className='ModelInputlabel'>First Name</label>
                                    <input type="text" className="modalInputBox form-control h-small" placeholder="First Name" name="first_name" id="first_name" onChange={this.onChangeFirstName} value={this.state.first_name} maxLength="50" required/>
                                </div>
                                <div className="col-sm-6 pb-2">
                                <label className='ModelInputlabel'>Last Name</label>
                                    <input type="text" className="modalInputBox form-control h-small" placeholder="Last Name" name="last_name" id="last_name" onChange={this.onChangeLastName} value={this.state.last_name} maxLength="50" required/>
                                </div>

                                <div className="col-sm-6  pb-2">
                                <label className='ModelInputlabel'>Mobile</label>
                                    <input type="tel" className="modalInputBox form-control h-small" placeholder="Mobile" name="mobile" id="mobile" onChange={this.onChangeMobile} value={this.state.mobile} maxLength="10" required pattern="[0-9]{10}" title='Phone No. should contain 10 digit.'/>
                                </div>

                                <div className="col-sm-6  pb-2">
                                <label className='ModelInputlabel'>Email ID</label>
                                    <input type="email" className="modalInputBox form-control h-small" placeholder="Mail" name="email_id" id="email_id" onChange={this.onChangeEmail} value={this.state.email_id} maxLength="50" required/>
                                </div>
                              

                               
                                <div className="col-sm-6  pb-2">
                                  <label className='ModelInputlabel'>Product</label>
                                  <div className="input-group  ">
                                    <div className="w-100">
                                      <select className="modalInputBox form-control w-100 select-white" name="product" id="product" onChange={this.onChangeProduct} value={this.state.product} required>
                                        <option value="">Select Product </option>
                                        {this.state.listProductData.length > 0 && this.state.listProductData && this.state.listProductData.map((item) => (
                                          <>
                                            <option value={item.id}>{item.product_name}</option>
                                          </>
                                        ))}
                                        {/* <option value="1">Product 1 </option>
                                        <option value="2">Product 2 </option>
                                        <option value="3">Product 3 </option> */}
                                      </select>  
                                    </div>
                                  </div>
                                </div>

                                
                            </div>
                            <label className='ModelInputlabel'>Enquiry</label>
                            <textarea cols="30" rows="5" className="modalInputBox  w-100 select-white1 "
                                placeholder="Enquiry" name="description" id="description" onChange={this.onChangeDescription} value={this.state.description} ></textarea>
                        </div>
                    </div>
                    <div className="row mx-0 text-center text-md-right pt-4">
                        <div className="post-icons d-md-flex flex-wrap justify-content-end">
                          
                            <button className="btn btn-primary sub-form">Submit</button>
                        </div>
                    </div>
              
                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />

                </Form>
                </div>
{/* 
            </div>
        </div>
    </div> */}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {

  const { user } = state.auth;
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    user,
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(SideBar);
