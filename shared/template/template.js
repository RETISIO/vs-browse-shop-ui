import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bredcrumb } from "./bredcrumb";
import { Facet } from "./facet";
import { ResultList } from "./resultList";

export function Template(props) {
  const createMarkup = (data) => ({ __html: JSON.parse(data).htmlContent });

  const renderContentData = (contentItemObj) => {
    if (contentItemObj.contentTypeId === "Breadcrumb") {
      return (
        <nav className="breadcrumbs-block hidden-print">
          <ol className="breadcrumb">
            <Bredcrumb />
          </ol>
        </nav>
      );
    }
    if (contentItemObj.contentTypeId === "Facet") {
      return <Facet />;
    }
    if (contentItemObj.contentTypeId === "Result List") {
      return <ResultList />;
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
      {props.templateData.map((data, index) =>
        renderColumnContentItems(data, index)
      )}
    </>
  );
}

export default Template;
