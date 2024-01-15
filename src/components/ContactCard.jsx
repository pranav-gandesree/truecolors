import React from 'react';
import { MdEmail, MdLocalPhone, MdLocationOn} from 'react-icons/md';
import { IoLogoInstagram } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
   justify-content: flex-start;
`;

const ContactCardWrapper = styled.div`
display: flex;
flex-direction: ${(props) => (props.row ? 'row' : 'column')};
width: 350px;
height: 200px;
margin-top: 20pxpx;
margin-left: -28px;
padding: 26px;

`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: white;
`;

const Icon = styled.div`
  margin-right: 10px;
  margin-bottom: -5px
`;

const Link = styled.a`
color: white;
opacity:0.8;
  text-decoration: none;
  font-size: 1.15rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactCard = ({ email, phone, address ,instagram, row }) => {
  return (
    <>
    <Container>
    <ContactCardWrapper>
      <ContactInfo>
        <Icon>
          <MdEmail />
        </Icon>
        <Link href={`mailto:${email}`}>{email}</Link>
      </ContactInfo>

      <ContactInfo>
        <Icon>
          <MdLocalPhone />
        </Icon>
        <Link href={`tel:${phone}`}>{phone}</Link>
      </ContactInfo>

      <ContactInfo>
        <Icon>
          <IoLogoInstagram />
        </Icon>
        <Link href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">{instagram}</Link>
      </ContactInfo>

      <ContactInfo>
        <Icon>
          <MdLocationOn />
        </Icon>
        <Link href={`https://www.google.com/maps/place/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">{address}</Link>
      </ContactInfo>

    </ContactCardWrapper>
     </Container>
    </>
  );
};

export default ContactCard;
