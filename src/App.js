import React,{Component,Suspense,lazy} from 'react';

import { connect } from "react-redux";
//import { Route, Router, BrowserRouter, Switch,Redirect,useHistory,withRouter,Link } from 'react-router-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


/*import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";*/

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import Drive from './components/admin/DriveList';
// import RoleList from './components/admin/RoleList';
//import $ from 'jquery';
//import Popper from 'popper.js';

/*import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/custom.css";
import "./App.css";*/

//import { clearMessage } from "./actions/message";

//import { history } from './helpers/history';


// const Login =lazy(() =>import ('./components/Login'));
// const UserList =lazy(() =>import ('./components/admin/UserList'));
// const Dashboard =lazy(() =>import ('./components/admin/Dashboard'));
// // const LeadList =lazy(() =>import ('./components/admin/LeadList'));
// const ProductList =lazy(() =>import ('./components/admin/ProductList'));
// const DepartmentList =lazy(() =>import ('./components/admin/DepartmentList'));
// const Lead=lazy(()=>import('./components/admin/LeadList'));
// const FieldEngg=lazy(()=>import('./components/admin/FieldEngg'));
// const SlotList=lazy(()=>import('./components/admin/SlotList'));
// const TemplateList=lazy(()=>import('./components/admin/TemplateList'));
// const RoleList=lazy(()=>import('./components/admin/RoleList'));
// const CampaignList=lazy(()=>import('./components/admin/CampaignList'))
// const DriveList=lazy(()=>import('./components/admin/DriveList'));
// const ReportList=lazy(()=>import('./components/admin/ReportList'));
const Sidebar=lazy(()=>import('./components/EnquiryForm'))

// const LeadS=lazy(()=>import('./components/admin/Lead'));

/*const Index =lazy(() =>import ('./components/Index'));
const Aboutus =lazy(() =>import ('./components/Aboutus'));
const TermsCondition =lazy(() =>import ('./components/TermsCondition'));
const PrivacyPolicy =lazy(() =>import ('./components/PrivacyPolicy'));
const Faqs =lazy(() =>import ('./components/Faqs'));
const HowItWorks =lazy(() =>import ('./components/HowItWorks'));
const AboutPartners =lazy(() =>import ('./components/AboutPartners'));
const aboutTeam =lazy(() =>import ('./components/aboutTeam'));
const Contact =lazy(() =>import ('./components/Contact'));

const PostInfo =lazy(() =>import ('./components/PostInfoPage'));

const NgoRegProcOne =lazy(() =>import ('./components/ngo/NgoRegProcOne'));
const NgoRegProcTwo =lazy(() =>import ('./components/ngo/NgoRegProcTwo'));
const NgoRegProcThree =lazy(() =>import ('./components/ngo/NgoRegProcThree'));
const NgoRegProcFour =lazy(() =>import ('./components/ngo/NgoRegProcFour'));
const NgoRegProcThankYou =lazy(() =>import ('./components/ngo/NgoRegProcThankYou'));
const NgoRegProcOneUpdate =lazy(() =>import ('./components/ngo/NgoRegProcOneUpdate'));
const NgoRegProcTwoUpdate =lazy(() =>import ('./components/ngo/NgoRegProcTwoUpdate'));
const NgoRegProcThreeUpdate =lazy(() =>import ('./components/ngo/NgoRegProcThreeUpdate'));
const NgoRegProcFourUpdate =lazy(() =>import ('./components/ngo/NgoRegProcFourUpdate'));

const NgoRegProgThankYou =lazy(() =>import ('./components/ngo/NgoRegProgressThankYou'));

const NgoHome =lazy(() =>import ('./components/ngo/NgoHome'));

const UserHome =lazy(() =>import ('./components/user/UserHome'));
const UserProfile =lazy(() =>import ('./components/user/UserProfile'));
const UserUserProfile =lazy(() =>import ('./components/user/UserUserProfile'));

const UserNgoList =lazy(() =>import ('./components/user/UserNgoList'));
//const UserList =lazy(() =>import ('./components/user/UserList'));
const UserProfile1 =lazy(() =>import ('./components/user/UserProfile1'));
//const UserVolunteerList =lazy(() =>import ('./components/user/UserVolunteerList'));
const UserNgoReview =lazy(() =>import ('./components/user/UserNgoReview'));
const UserNgoInfo =lazy(() =>import ('./components/user/UserNgoInfo'));
const NgoReviewList =lazy(() =>import ('./components/ngo/NgoReviewList'));
const NgoAllValunteer =lazy(() =>import ('./components/ngo/NgoAllValunteer'));
//const NgoInterestedValunteer =lazy(() =>import ('./components/ngo/NgoAllInterestedValunteer'));
//const NgoValunteerListing =lazy(() =>import ('./components/ngo/NgoAllValunteerListing'));
const NgoProfile =lazy(() =>import ('./components/ngo/NgoProfilePage'));
const NgoAboutProfile =lazy(() =>import ('./components/ngo/NgoAboutProfile'));
const NgoOrganization =lazy(() =>import ('./components/ngo/NgoOrganization'));
const NgoDonation =lazy(() =>import ('./components/ngo/NgoDonation'));
//const NgoDoGoodListing =lazy(() =>import ('./components/ngo/NgoDoGoodListing'));
const NgoNotification =lazy(() =>import ('./components/ngo/NgoNotification'));
const NgoAboutProfile1 =lazy(() =>import ('./components/ngo/NgoAboutProfile1'));

const UserDonate =lazy(() =>import ('./components/user/UserDonate'));
const UserValunteer =lazy(() =>import ('./components/user/UserValunteer'));
const UserAboutProfile =lazy(() =>import ('./components/user/UserAboutProfile'));

const UserMyCampaign =lazy(() =>import ('./components/user/UserMyCampaign'));
const UserMyDonations =lazy(() =>import ('./components/user/UserMyDonations'));

const Volunteer =lazy(() =>import ('./components/Valunteer'));
const Donate =lazy(() =>import ('./components/Donate'));
const NgoList =lazy(() =>import ('./components/NgoList'));

const UserNgoProfile =lazy(() =>import ('./components/user/NgoProfilePage'));
const UserNgoAboutProfile =lazy(() =>import ('./components/user/NgoAboutProfile'));

const UserNotification =lazy(() =>import ('./components/user/UserNotification'));*/

class App extends Component {
  //constructor(props) {
    //super(props);

    /*this.state = {
      currentUser: undefined,
    };*/

    /*history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });*/
  //}

  //componentDidMount() {
    //const user = this.props.user;

    /*if (user) {
      this.setState({
        currentUser: user,
      });
    }*/
  //}

  render() {
    //const { currentUser } = this.state;

    return (
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <Switch>
            //without login pages
            <Route exact path="/" component={Sidebar} />
           
            {/* <Route exact path="/admin/department/list" component={DepartmentList} /> */}
         

            {/* <Route exact path="/admin/lead" component={LeadS}/> */}


            {/*<Route exact path="/volunteer" component={Volunteer} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/ngolist" component={NgoList} />

            <Route exact path="/post/info/:post_id" component={PostInfo} />

            //static page
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/termscondition" component={TermsCondition} />
            <Route exact path="/privacypolicy" component={PrivacyPolicy} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/aboutpartners" component={AboutPartners} />
            <Route exact path="/aboutteam" component={aboutTeam} />
            <Route exact path="/contact" component={Contact} />

            //ngo register
            <Route exact path="/ngo/registration/one" component={NgoRegProcOne} />
            <Route exact path="/ngo/registration/two" component={NgoRegProcTwo} />
            <Route exact path="/ngo/registration/three" component={NgoRegProcThree} />
            <Route exact path="/ngo/registration/four" component={NgoRegProcFour} />
            <Route exact path="/ngo/registration/thankyou" component={NgoRegProcThankYou} />
			
			      <Route exact path="/ngo/registration/updateone/:ngo_id" component={NgoRegProcOneUpdate} />
            <Route exact path="/ngo/registration/updatetwo/:ngo_id" component={NgoRegProcTwoUpdate} />
            <Route exact path="/ngo/registration/updatethree/:ngo_id" component={NgoRegProcThreeUpdate} />
            <Route exact path="/ngo/registration/updatefour/:ngo_id" component={NgoRegProcFourUpdate} />
            <Route exact path="/ngo/progress" component={NgoRegProgThankYou} />
            
            //ngo
            <Route exact path="/ngo/home" component={NgoHome} />
            <Route exact path="/ngo/reviewlist" component={NgoReviewList} />
            <Route exact path="/ngo/ngoallvalunteer" component={NgoAllValunteer} />
            {/*<Route exact path="/ngo/ngointerestedvalunteer" component={NgoInterestedValunteer} />
            <Route exact path="/ngo/ngovalunteerlisting" component={NgoValunteerListing} />*/}
            {/*<Route exact path="/ngo/profile" component={NgoProfile} />
            <Route exact path="/ngo/about_profile" component={NgoAboutProfile} />
            <Route exact path="/ngo/organisational_details" component={NgoOrganization} />
           
            <Route exact path="/ngo/ngoAboutProfile1" component={ NgoAboutProfile1} /> 
            <Route exact path="/ngo/donations" component={NgoDonation} />
            {/*<Route exact path="/ngo/dogoodlisting" component={NgoDoGoodListing} />*/}
            {/*<Route exact path="/ngo/notification" component={NgoNotification} />

            /*<Route exact path="/ngo/post/info/:post_id" component={PostInfo} />*/}


            {/*<Route exact path="/user/home" component={UserHome} />
            <Route exact path="/user/profile" component={UserProfile} />
            <Route exact path="/user/info/:user_id" component={UserUserProfile} />
            <Route exact path="/user/ngo/list" component={UserNgoList} />
            <Route exact path="/user/ngo/info/:ngo_id" component={UserNgoInfo} />
            <Route exact path="/user/user/list" component={UserList} />
            {/*<Route exact path="/user/donate/list" component={UserDonateList} />
            <Route exact path="/user/volunteer/list" component={UserVolunteerList} />*/}
            {/*<Route exact path="/user/ngo/review/:ngo_id" component={UserNgoReview} />
            <Route exact path="/user/donate" component={UserDonate} />
            <Route exact path="/user/volunteer" component={UserValunteer} />
            <Route exact path="/user/about_profile" component={UserAboutProfile} />
            <Route exact path="/user/user_my_campaign" component={UserMyCampaign} />
            <Route exact path="/user/user_my_donations" component={UserMyDonations} />
            <Route exact path="/user/ngo/profile/:ngo_id" component={UserNgoProfile} />
            <Route exact path="/user/ngo/about_profile/:ngo_id" component={UserNgoAboutProfile} />
            <Route exact path="/user/notification" component={UserNotification} />
            <Route exact path="/user/userprofile1" component={UserProfile1} />*/}

            {/*<Route exact path="/user/post/info/:post_id" component={PostInfo} />*/}

          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);