import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeHeader from './header/header';
import FooterSubscriptionForm from './footer/footerSubscription';
import MiniStaticCarousel from './miniStaticCarousel';
// import ProductCarousel from './productCarousel';

function Template(props) {
  const createMarkup = (data) => ({ __html: Object.values(JSON.parse(data))[0] });

  const renderContentData = (contentItemObj) => {
    if (contentItemObj.contentTypeId === 'htmlContent:default') {
      const data = contentItemObj.content;
      return (
        <section dangerouslySetInnerHTML={createMarkup(data)}></section>
      );
    }
    if (contentItemObj.contentTypeId === 'footerForm:custom') {
      return (
        <FooterSubscriptionForm transformText={props.transformText} />
      );
    }
    if (contentItemObj.contentTypeId === 'dynamicHeader:custom') {
      return (
        <HomeHeader
          {...props}
        />
      );
    }
    if (contentItemObj.contentTypeId === 'miniStaticCarousel:custom') {
      return (
        <MiniStaticCarousel />
      );
    }
    if(props.ComponentMap){
      if(props.ComponentMap[contentItemObj.contentTypeId]){
        let Component = props.ComponentMap[contentItemObj.contentTypeId];
        return (<Component { ...contentItemObj } />)
      }
    }
    // if (contentItemObj.contentTypeId === 'Product Carousel') {
    //   const data = contentItemObj.content;
    //   return (
    //     <ProductCarousel content={data} />
    //   );
    // }
  };

  const getColumnItems = (data, contentItemObj) => {
    const contentItemArr = Object.values(contentItemObj);
    return (
      contentItemArr.map((item, i) => {
        const gridColumnClass = data.gridColFormat[i];
        return (
          <Col xs={12} md={gridColumnClass} key={`col-${i}`}>
            {renderContentData(item)}
          </Col>
        );
      })
    );
  };

  const renderColumnContentItems = (data, index) => {
    const contentItemObj = data.columnContentItemMap;
    return (
      <Container key={`container-${index}`}>
        <Row key={`row-${index}`}>
          {getColumnItems(data, contentItemObj)}
        </Row>
      </Container>
    );
  };

  return (
    <>
      {props.templateData.map((data, index) => renderColumnContentItems(data, index))}
    </>
  );
}

export default Template;
