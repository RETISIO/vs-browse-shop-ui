/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable linebreak-style */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Breadcrumb } from './breadcrumb';
import Facet from './facet';
import ResultList from './resultList';

export function Template(props) {
  const renderContentData = (contentItemObj) => {
    if (contentItemObj.contentTypeId === 'Breadcrumb') {
      return (
        <nav className="breadcrumbs-block hidden-print">
          <ol className="breadcrumb">
            <Breadcrumb {...props} />
          </ol>
        </nav>
      );
    }
    if (contentItemObj.contentTypeId === 'Facet') {
      return <Facet {...props} />;
    }
    if (contentItemObj.contentTypeId === 'Result List') {
      return <ResultList {...props} />;
    }
  };

  const getColumnItems = (data, contentItemObj) => {
    const contentItemArr = Object.values(contentItemObj);
    return contentItemArr.map((item, i) => {
      const gridColumnClass = data.gridColFormat[i];
      return (
        <Col xs={12} md={gridColumnClass} key={`col-${i}`}>
          {renderContentData(item)}
        </Col>
      );
    });
  };

  const renderColumnContentItems = (data, index) => {
    const contentItemObj = data.columnContentItemMap;
    return (
      // <Container key={`container-${index}`}>
      <Row key={`row-${index}`}>{getColumnItems(data, contentItemObj)}</Row>
      // </Container>
    );
  };

  return (
    <>
      {props.templateData.map((data, index) => renderColumnContentItems(data, index))}
    </>
  );
}

export default Template;
