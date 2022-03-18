import React from "react";
import {MDBBtn,MDBCard,MDBCardBody,MDBCardHeader,MDBCardImage,MDBCardText,MDBCardTitle,MDBCol,MDBRipple, MDBRow, MDBTabs, MDBTabsItem, MDBTabsLink} from 'mdb-react-ui-kit'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
  return (
    <div className="card">
      <h1 className="text-Center" >Contact Us</h1>
     <MDBCard className="card" style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          beautiful escape in utah
        </MDBCardText>
        <MDBBtn href='#'>Visit utah</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    
      <MDBCard className="card" style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className="bg-image hover-overlay">
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
        <MDBCardBody >
          <MDBCardHeader>
        <MDBTabs className='card-header-tabs'>
          <MDBTabsItem>
            <MDBTabsLink active>
              Skydive
            </MDBTabsLink>
              </MDBTabsItem >
          <MDBTabsItem>
            <MDBTabsLink>
              Eat Turff
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink className='disabled'>
              Go Surf
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </MDBCardHeader>
        <MDBCardTitle>San Diego</MDBCardTitle>
        <MDBCardText>
          Most wonderful place on earth
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      <div className="mb-3 card">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" aria-label="Disabled input" />
</div>
<div class="mb-3 card">
  <label for="exampleFormControlTextarea1" className="form-label">Tell my why you're Awesome</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
</div>
      
    </div>

)
}

export default Contact;
