/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { HtmlContent } from '@retisio/sf-ui';

export default function CookingDescription({ id }) {
  const [data, setData] = useState();

  const [description, setDescription] = useState();

  const fetchCookingData = async(cid) => {
    try {
      const response = await fetch(`/arc/getContentItem/${cid}`);
      if (response && response.status !== 400) {
        const jsonData = await response.json();
        if (jsonData) {
          const config = JSON.parse(jsonData?.localizedConfigValue?.en_US);
          setData(config);
          const desc = {
            content: JSON.stringify([config.cookingInstruction]),
          };
          setDescription(desc);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
    
  useEffect(() => {
    fetchCookingData(id);
  }, [id]);

  const handlePrint = () => {
    const printContent = document.getElementById(id).innerHTML;
    const WinPrint = window.open(
      '',
      '',
      'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0',
    );
    WinPrint.document.write(printContent);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };
  return (
    <div className="panel-body">
      <div className="cooking-instruction-button">
        <button
          id="print-btn"
          className="printbtn btn-primary btn-inverse btn-print"
          onClick={() => handlePrint()}
        >
          <i className="icon icon-left fas fa-print"></i>
        &nbsp; Print
        </button>
        <div className="btn-group">
          <a
            className="sharebtn btn-primary btn-inverse btn-share dropdown-toggle"
            href={`mailto:?subject=${data?.name}&body=Check out these cooking instructions from Allen Brothers: https://www.allenbrothers.com/article/${data?.name}/${id}`}
          >
            <i className="icon icon-left fas fa-share-square"></i>
          &nbsp; Share
          </a>
        </div>
      </div>
      <div className="cooking-instruction-accordion" id={id}>
        <div className="cooking-instruction-caption-accordion">
          <div className="cooking-instruction-heading-accordion">
            <h1>
              {'Cooking Instructions: '}
              <span className="text-slim">{data?.name}</span>
            </h1>
            <p className="serving-size">
              <strong>{'Serving Size: '}</strong>
              <span className="text-slim">{data?.servingSize}</span>
            </p>
          </div>
          <br />
          <div className="cooking-description-accordion">
            {description && (
              <HtmlContent
                contentItemObj={description}
                isNextJs={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
