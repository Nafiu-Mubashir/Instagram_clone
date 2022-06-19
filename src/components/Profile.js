import React from 'react'
import Navbar from './Navbar'
import user from "../assests/user-removebg-preview.png"
import coffe from "../assests/coffe.jpg"
import Footer from './Footer';
import { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
function Profile() {
  const GETUSER = JSON.parse(localStorage.getItem("CurrentUser"));
  // console.log(GETUSER.followers.length)
  const [fillActive, setFillActive] = useState('tab1');
  const userInfo = JSON.parse(localStorage.getItem('InstagramUsers'));

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  const handleProfilePicture = (e) => {
    let picture = e.target.files[0];
    console.log('sco');
    // set picture as base64 image and upload as url
    let reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onloadend =()=> {

      let user = userInfo.find(info => info.email == GETUSER.email);
      // console.log(GETUSER)
      if (user) {
        let updateUser = {...user, profilePics: reader.result};
        localStorage.setItem('CurrentUser', JSON.stringify(updateUser));
        console.log(updateUser)
      }
    }
  }
  return (
    <>
      <Navbar />
      <section>
        <div className='container mt-4 p-3'>
          <div className='w-75 m-auto'>
            <div className='row'>
              {/* <img src={coffe} className="rounded-circle" alt="" style={{width: "100px", height: "100px" }}/> */}
              <div className='col-lg-3 col-md-6'>
              <label>
                  <input type="file" hidden="hidden" onChange={handleProfilePicture}/>
                  <img src={GETUSER.profilePics} className="rounded-circle border p-1" alt="" style={{width: "150px", height: "150px" }}/>
                </label>
              </div>
              <div className='col-lg-9 col-md-6'>
                <div className='d-flex'>
                  <h4 className=''>{GETUSER.username}</h4>
                  <button className='btn ms-5'>Edit profie</button>
                  <i className="fa-solid fa-gear fs-1 text-dark ms-4"></i>
                </div>
                <div className='d-flex mt-3'>
                  <p className=''>user posts</p>
                  <p className='ms-5'>{GETUSER.followers.length} followers</p>
                  <p className='ms-5'>{GETUSER.following.length} following</p>
                </div>
                <div>
                  <h3>{GETUSER.fullname}</h3>
                  <p>User pofile details</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 mt-4'>
                <img src={coffe} alt="" id='coffe' className='rounded-circle img-fluid  border' style={{width: "70px", height: "70px" }} />
                <p>Highlights</p>
              </div>
            </div>
            <div className='mt-4'>
              <MDBTabs fill className='mb-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                  <i className="fa-solid fa-table-cells"></i> POSTS
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                  <i classsName="fa-solid fa-bookmark"></i> SAVED
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                  <i classsName="fa-solid fa-user"></i> TAGGED
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={fillActive === 'tab1'}>Tab 1 content</MDBTabsPane>
                <MDBTabsPane show={fillActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                <MDBTabsPane show={fillActive === 'tab3'}>Tab 3 content</MDBTabsPane>
              </MDBTabsContent>
            </div>
          </div>
        </div>
        <Footer />
      </section>



      {/* <div className="container">                      
    <div className="row text-center justify-content-center mb-5">
        <div className="col-xl-6 col-lg-8">
            <h2 className="font-weight-bold">A Company Evolution</h2>
            <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">2003</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">2004</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">2005</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Launched Messanger</p>
                    </div>
                </div>
                <div className="timeline-step">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">2010</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">Open New Branch</p>
                    </div>
                </div>
                <div className="timeline-step mb-0">
                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div className="inner-circle"></div>
                        <p className="h6 mt-3 mb-1">2020</p>
                        <p className="h6 text-muted mb-0 mb-lg-0">In Fortune 500</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
    </>
  )
}

export default Profile