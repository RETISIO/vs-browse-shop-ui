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
import { Breadcrumb } from './components/breadcrumb';
import Facet from './components/facet';
import ResultList from './components/resultList';
import { ResultCount } from './components/resultCount';
import { CategoryDescription, CategoryLongDescription } from './components/categoryDescription';

export function Template(props) {
  const renderContentData = (contentItemObj) => {
    if (contentItemObj.contentTypeId === 'Breadcrumb' && props.type === 'breeadcrumb') {
      return (
        <nav className="breadcrumbs-block hidden-print">
          <ol className="breadcrumb">
            <Breadcrumb {...props} />
          </ol>
        </nav>
      );
    }
    if (contentItemObj.contentTypeId === 'Facet' && props.type === 'facets') {
      return <Facet {...props} />;
    }
    if ((contentItemObj.contentTypeId === 'Result List' && props.type === 'resultList')) {
      return <ResultList {...props} />;
    }
    if ((contentItemObj.contentTypeId === 'Result Count' && props.type === 'resultCount')) {
      return <ResultCount {...props} />;
    }
    if ((contentItemObj.contentTypeId === 'Category Description' && props.type === 'categoryDescription')) {
      return <CategoryDescription {...props} />;
    }
    if ((contentItemObj.contentTypeId === 'Category Long Description' && props.type === 'categoryLongDescription')) {
      return <CategoryLongDescription {...props} />;
    }
  };

  const getColumnItems = (data, contentItemObj) => {
    const contentItemArr = Object.values(contentItemObj);
    return contentItemArr.map((item, i) =>
      // const gridColumnClass = data.gridColFormat[i];
      (
        // <Col xs={12} md={gridColumnClass} key={`col-${i}`}>
        //   {renderContentData(item)}
        // </Col>
        <>{renderContentData(item)}</>
      ));
  };

  const renderColumnContentItems = (data, index) => {
    const contentItemObj = data.columnContentItemMap;
    return (
      // <Container key={`container-${index}`}>
      // <Row key={`row-${index}`}>{getColumnItems(data, contentItemObj)}</Row>
      // </Container>
      <>{getColumnItems(data, contentItemObj)}</>
    );
  };

  return (
    <>
      {props.templateData.map((data, index) => renderColumnContentItems(data, index))}
    </>
  );
}

export default Template;
